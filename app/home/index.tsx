import React from "react";
import HomeCard from "../../components/home/HomeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";

const HomeStation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <HomeCard title="Neumáticos" backgroundColor="purple" />
        </View>
        <View style={{ width: 20 }}></View>
        <View style={{ flex: 1 }}>
        <HomeCard title="Oula" backgroundColor="#ccc" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // Adjust as per your design
    paddingHorizontal: 20,   // Horizontal padding for SafeAreaView
  },
  row: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeStation;
