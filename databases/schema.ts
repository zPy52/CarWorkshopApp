import {
  integer,
  sqliteTable,
  text,
  real,
  unique,
} from "drizzle-orm/sqlite-core";

export const cartTable = sqliteTable(
  "cart",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    measures: text("measures").notNull(),
    quantity: integer("quantity").notNull(),
    pricePerItem: real("pricePerItem").notNull(),
  },
  (cart) => ({
    idMeasuresUnq: unique().on(cart.id, cart.measures),
  })
);
