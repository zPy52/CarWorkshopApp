import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { DrawerLayout } from "react-native-gesture-handler";
import { Link, useRouter } from "expo-router";
import HomeStation from "../home";
import Insets from "../../constants/insets";

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawer = useRef(null);
  const router = useRouter();

  const renderDrawerContent = () => (
    <SafeAreaView style={styles.drawerContainer}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Nombre del Usuario</Text>
      </View>

      <Link
        href="/add-car"
        style={styles.drawerItem}
        onPress={() => drawer.current.closeDrawer()}
      >
        Añadir un nuevo coche
      </Link>
      <Link
        href="/change-car"
        style={styles.drawerItem}
        onPress={() => drawer.current.closeDrawer()}
      >
        Cambiar de coche
      </Link>

      <Link
        href="/history"
        style={styles.drawerItem}
        onPress={() => drawer.current.closeDrawer()}
      >
        Historial de Servicios
      </Link>
      <Link
        href="/reservations"
        style={styles.drawerItem}
        onPress={() => drawer.current.closeDrawer()}
      >
        Reservas Activas
      </Link>

      <Link
        href="/contact"
        style={styles.drawerItem}
        onPress={() => drawer.current.closeDrawer()}
      >
        Contacto
      </Link>
      <Link
        href="/settings"
        style={styles.drawerItem}
        onPress={() => drawer.current.closeDrawer()}
      >
        Ajustes de Cuenta
      </Link>
      <Link
        href="/help"
        style={styles.drawerItem}
        onPress={() => drawer.current.closeDrawer()}
      >
        Centro de Ayuda
      </Link>
      <Link
        href="/terms"
        style={styles.drawerItem}
        onPress={() => drawer.current.closeDrawer()}
      >
        Términos y Condiciones
      </Link>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          drawer.current.closeDrawer();
          alert("Cerrando sesión...");
        }}
      >
        <Text style={styles.drawerItem}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <DrawerLayout
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      drawerType="front"
      drawerBackgroundColor="#fff"
      renderNavigationView={renderDrawerContent}
      onDrawerOpen={() => setDrawerOpen(true)}
      onDrawerClose={() => setDrawerOpen(false)}
    >
      <TouchableOpacity
        onPress={() => drawer.current.openDrawer()}
        style={styles.menuButton}
      >
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>
      {HomeStation()}
    </DrawerLayout>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    marginBottom: 20,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  drawerItem: {
    fontSize: 16,
    marginVertical: 10,
  },
  logoutButton: {
    marginTop: "auto", // Esto empuja el botón de cerrar sesión al final
  },
  container: {
    flex: 1,
  },
  menuButton: {
    padding: Insets.screenMarginMedium,
    marginTop: 20,
    paddingBottom: 0,
  },
  menuText: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentLink: {
    fontSize: 18,
    color: "blue",
  },
});
