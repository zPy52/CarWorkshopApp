import React from "react";
import HomeCard from "../../components/home/HomeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../hooks/theme";

const HomeStation = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{
      marginTop: theme.insets.screenMarginLarge,
      backgroundColor: theme.colors.background,
      paddingHorizontal: theme.insets.screenMarginMedium,
     }}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <HomeCard title="Neumáticos y otras cosas más variadas" imageSource={ theme.images.wheel } backgroundColor="purple" />
        </View>
        <View style={{ width: theme.insets.screenMarginMedium }}></View>
        <View style={{ flex: 1 }}>
        <HomeCard title="Oula" imageSource={ theme.images.wheel } backgroundColor="#ccc" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeStation;
