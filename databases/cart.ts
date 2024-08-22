import { drizzle, ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync, SQLiteDatabase } from "expo-sqlite/next";
import { eq } from "drizzle-orm";
import { cartTable } from "./schema";

export default class Checkout {
  // Private static instance of the class
  private static instance: Checkout;

  private static expoDb: SQLiteDatabase;
  private static db: ExpoSQLiteDatabase;

  // Private constructor to prevent direct instantiation
  private constructor() {}

  // Public static method to access the single instance of Checkout
  public static getInstance(): Checkout {
    if (!Checkout.instance) {
      Checkout.instance = new Checkout();
      Checkout.expoDb = openDatabaseSync("checkout.db", {
        enableChangeListener: true,
      });
      Checkout.db = drizzle(Checkout.expoDb);
      Checkout.createTablesIfDoNotExist();
    }
    return Checkout.instance;
  }

  private static createTablesIfDoNotExist() {
    Checkout.expoDb.execSync(
      `CREATE TABLE IF NOT EXISTS cart (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        measures TEXT,
        quantity INTEGER NOT NULL CHECK (quantity > 0),
        pricePerItem REAL NOT NULL CHECK (pricePerItem > 0),
        UNIQUE(id, measures)
      );`
    );
  }

  public async upsertProduct(
    id: string,
    name?: string,
    measures?: string,
    quantity?: number,
    pricePerItem?: number
  ) {
    // Define the fields to be inserted or updated
    const insertData = { id, name, measures, quantity, pricePerItem };

    // Filter out undefined values from insertData for the set clause
    const updateData = Object.fromEntries(
      Object.entries(insertData).filter(
        ([key, value]) => key !== "id" && value !== undefined
      )
    );

    // If the product already exists, update only the provided fields
    await Checkout.db.insert(cartTable).values(insertData).onConflictDoUpdate({
      target: cartTable.id,
      set: updateData,
    });
  }

  public async getProducts() {
    return await Checkout.db.select().from(cartTable);
  }

  public async removeProduct(id: string) {
    await Checkout.db.delete(cartTable).where(eq(cartTable.id, id));
  }

  public async clearCart() {
    await Checkout.db.delete(cartTable);
  }
}
