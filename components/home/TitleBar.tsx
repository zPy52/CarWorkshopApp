import { router } from "expo-router";
import { View, Image, StyleSheet, Text, ViewStyle, StyleProp, ImageSourcePropType, SafeAreaView} from "react-native"; // Import the 'Image' component, 'StyleSheet' module, 'Text' component, and 'useTheme' hook from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import StaticImages from "../../constants/static_images";
import Insets from "../../constants/insets";
import { useTheme } from "../../hooks/theme";
import { DrawerLayout } from 'react-native-gesture-handler';
import { Link, useRouter } from 'expo-router';
import { useRef, useState } from "react";


const MATRICULA = '1234ABC'; // CAMBIAR POR EL NÚMERO DE MATRÍCULA

interface Props {
    carId: string;
  }

export default function TitleBar({carId}: Props) {
    const handleAccButtonClick = () => {router.navigate('/drawer')}; // CAMBIAR RUTAS
    const { theme } = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawer = useRef(null);
    const router = useRouter();

    const renderDrawerContent = () => (
        <SafeAreaView style={styles.drawerContainer}>
          <View style={styles.profileSection}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
            <Text style={styles.username}>Nombre del Usuario</Text>
          </View>

          <Link href="/add-car" style={styles.drawerItem} onPress={() => drawer.current.closeDrawer()}>
            Añadir un nuevo coche
          </Link>
          <Link href="/change-car" style={styles.drawerItem} onPress={() => drawer.current.closeDrawer()}>
            Cambiar de coche
          </Link>

          <Link href="/history" style={styles.drawerItem} onPress={() => drawer.current.closeDrawer()}>
            Historial de Servicios
          </Link>
          <Link href="/reservations" style={styles.drawerItem} onPress={() => drawer.current.closeDrawer()}>
            Reservas Activas
          </Link>

          <Link href="/contact" style={styles.drawerItem} onPress={() => drawer.current.closeDrawer()}>
            Contacto
          </Link>
          <Link href="/settings" style={styles.drawerItem} onPress={() => drawer.current.closeDrawer()}>
            Ajustes de Cuenta
          </Link>
          <Link href="/help" style={styles.drawerItem} onPress={() => drawer.current.closeDrawer()}>
            Centro de Ayuda
          </Link>
          <Link href="/terms" style={styles.drawerItem} onPress={() => drawer.current.closeDrawer()}>
            Términos y Condiciones
          </Link>

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => {
              drawer.current.closeDrawer();
              alert('Cerrando sesión...');
            }}
          >
            <Text style={styles.drawerItem}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </SafeAreaView>
      );

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            padding: Insets.submedium,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: Insets.small,
        },
        image: {
            height: 25,
            width: 25,
        },
        button: {}, // Add the 'buttonText' style
        primaryText: {
            color: theme.colors.onBackground,
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: Insets.medium,
        },
        secondaryText: {
            color: theme.colors.onBackground,
            fontWeight: 'bold',
            marginLeft: Insets.medium,
        },
        icon: {
            height: 25,
            width: 25,
        },
        drawerContainer: {
            flex: 1,
            padding: 20,
          },
          profileSection: {
            marginBottom: 20,
            alignItems: 'center',
          },
          avatar: {
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 10,
          },
          username: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          drawerItem: {
            fontSize: 16,
            marginVertical: 10,
          },
          logoutButton: {
            marginTop: 'auto', // Esto empuja el botón de cerrar sesión al final
          },
          menuButton: {
            padding: 10,
          },
          menuText: {
            fontSize: 24,
          },
          content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          contentLink: {
            fontSize: 18,
            color: 'blue',
          }
        });

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
        <Image style={styles.image} source={StaticImages.carTypes.car}/>

            <View style={{flex: 1}}>
                <Text style={styles.secondaryText}>Tu coche</Text>
                    <Text  style={styles.primaryText}>{carId}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => drawer.current.openDrawer()}>
                <Image style={styles.icon} source={StaticImages.icons.user}/>
            </TouchableOpacity>
        </DrawerLayout>
    )
};
