import React from "react";
import HomeCard from "../../components/home/HomeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../hooks/theme";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";

const HomeStation = () => {
  const { theme } = useTheme();
  
  const styles = StyleSheet.create({
    mainContainer: {
      marginTop: Insets.screenMarginLarge,
      backgroundColor: theme.colors.background,
      paddingHorizontal: Insets.screenMarginMedium,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: Insets.medium,
    },
    text: {
      color: theme.colors.onBackground
    }
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={{ marginBottom: Insets.screenMarginLarge }}>
          <Link href="/">
            <Text style={ styles.text }>
              Volver a la home
            </Text>
          </Link>
        </View>

        <View style={styles.row}>
          <View style={{ flex: 1, height: Insets.layoutLarge }}>
            <HomeCard title="Neumáticos y otras cosas más variadas" imageSource={ StaticImages.wheel } backgroundColor="purple" />
          </View>
          <View style={{ width: Insets.screenMarginMedium }}></View>
          <View style={{ flex: 1, height: Insets.layoutLarge }}>
          <HomeCard title="Oula" imageSource={ StaticImages.wheel } backgroundColor="#ccc" />
          </View>
        </View>

        <View style={styles.row}>
          <View style={{ flex: 1, height: Insets.layoutLarge }}>
            <HomeCard title="Neumáticos y otras cosas más variadas" imageSource={ StaticImages.wheel } backgroundColor="purple" />
          </View>
          <View style={{ width: Insets.screenMarginMedium }}></View>
          <View style={{ flex: 1, height: Insets.layoutLarge }}>
          <HomeCard title="Oula" imageSource={ StaticImages.wheel } backgroundColor="#ccc" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default HomeStation;
