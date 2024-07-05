import React from "react";
import HomeCard from "../../components/home/HomeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../hooks/theme";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const HomeStation = () => {
  const { theme } = useTheme();
  
  const styles = StyleSheet.create({
    mainContainer: {
      marginTop: theme.insets.screenMarginLarge,
      backgroundColor: theme.colors.background,
      paddingHorizontal: theme.insets.screenMarginMedium,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: theme.insets.medium,
    },
    text: {
      color: theme.colors.onBackground
    }
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={{ marginBottom: theme.insets.screenMarginLarge }}>
          <Link href="/">
            <Text style={ styles.text }>
              Volver a la home
            </Text>
          </Link>
        </View>

        <View style={styles.row}>
          <View style={{ flex: 1, height: theme.insets.layoutLarge }}>
            <HomeCard title="Neumáticos y otras cosas más variadas" imageSource={ theme.images.wheel } backgroundColor="purple" />
          </View>
          <View style={{ width: theme.insets.screenMarginMedium }}></View>
          <View style={{ flex: 1, height: theme.insets.layoutLarge }}>
          <HomeCard title="Oula" imageSource={ theme.images.wheel } backgroundColor="#ccc" />
          </View>
        </View>

        <View style={styles.row}>
          <View style={{ flex: 1, height: theme.insets.layoutLarge }}>
            <HomeCard title="Neumáticos y otras cosas más variadas" imageSource={ theme.images.wheel } backgroundColor="purple" />
          </View>
          <View style={{ width: theme.insets.screenMarginMedium }}></View>
          <View style={{ flex: 1, height: theme.insets.layoutLarge }}>
          <HomeCard title="Oula" imageSource={ theme.images.wheel } backgroundColor="#ccc" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default HomeStation;
