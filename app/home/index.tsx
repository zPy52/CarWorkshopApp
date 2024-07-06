import React from "react";
import HomeCard from "../../components/home/HomeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Dimensions } from "react-native";
import { useTheme } from "../../hooks/theme";
import { ScrollView } from "react-native-gesture-handler";
import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";
import WrapView from "../../components/shared/WrapView";

const HomeStation = () => {
  const screenWidth = Dimensions.get("window").width;
  const { theme } = useTheme();
  
  const styles = StyleSheet.create({
    mainContainer: {
      marginTop: Insets.screenMarginLarge,
      backgroundColor: theme.colors.background,
      paddingHorizontal: Insets.screenMarginMedium,
    },
    text: {
      color: theme.colors.onBackground
    },
    
    primaryElement: {
      width: screenWidth - Insets.screenMarginMedium * 2, 
      height: Insets.layoutLarge + Insets.layoutSmall,
    },
    secondaryElement: {
      width: screenWidth - Insets.screenMarginMedium * 2, 
      height: Insets.layoutLarge,
    },
    element: {
      width: screenWidth * 0.5 - Insets.screenMarginMedium - Insets.medium, 
      height: Insets.layoutLarge,
    },
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <WrapView 
          horizontalSpacing={ Insets.screenMarginMedium } 
          verticalSpacing={ Insets.screenMarginMedium }
          >
          {[  
            <HomeCard 
              key={"aysduydaasdadss13rdasd"} 
              navigateTo="/"
              title="Amortiguadores" 
              imageSource={ StaticImages.icons.shockAbsorbers } 
              containerColor={ theme.colors.home.shockAbsorbers.container } 
              backgroundColor={ theme.colors.home.shockAbsorbers.background }
              style={ styles.element } />,
              
            <HomeCard 
              key={"sd"} 
              navigateTo="/"
              title="Embragues" 
              imageSource={ StaticImages.icons.clutch } 
              containerColor={ theme.colors.home.clutches.container } 
              backgroundColor={ theme.colors.home.clutches.background }
              style={ styles.element } />,
              
            <HomeCard 
              key={"aysduyda1132s"} 
              navigateTo="/"
              title="Revisiones" 
              imageSource={ StaticImages.icons.engineOil } 
              containerColor={ theme.colors.home.inspections.container } 
              backgroundColor={ theme.colors.home.inspections.background }
              mode="secondary"
              style={ styles.secondaryElement } />,

            <HomeCard 
              key={"aysduy14daff1s"} 
              navigateTo="/"
              title="Neumáticos" 
              imageSource={ StaticImages.icons.tyre } 
              containerColor={ theme.colors.home.tyres.container } 
              backgroundColor={ theme.colors.home.tyres.background }
              mode="primary"
              style={ styles.primaryElement } />,
          ]}
        </WrapView>
      </ScrollView>
    </SafeAreaView>
  );
};


export default HomeStation;
