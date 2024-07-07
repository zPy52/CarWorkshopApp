import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Dimensions } from "react-native";
import { useTheme } from "../../hooks/theme";
import { ScrollView } from "react-native-gesture-handler";
import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";
import WrapView from "../../components/shared/WrapView";
import HomeCard from "../../components/home/HomeCard";

const HomeStation = () => {
  const screenWidth = Dimensions.get("window").width;
  const { theme } = useTheme();
  
  const styles = StyleSheet.create({
    mainContainer: {
      marginTop: Insets.screenMarginLarge,
      backgroundColor: theme.colors.background,
      paddingHorizontal: Insets.medium,
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
      width: screenWidth * 0.5 - Insets.medium * 1.5, 
      height: screenWidth * 0.5 - Insets.medium * 1.5,
    },
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <WrapView 
          horizontalSpacing={ Insets.medium } 
          verticalSpacing={ Insets.medium }
          >
          {[  
            <HomeCard 
              key={"aa01"} 
              navigateTo="/"
              title="Amortiguadores" 
              imageSource={ StaticImages.icons.shockAbsorbers } 
              style={ styles.element } />,

            <HomeCard 
              key={"aa02"} 
              navigateTo="/"
              title="Recambios" 
              imageSource={ StaticImages.icons.shockAbsorbers } 
              style={ styles.element } />,

            <HomeCard 
              key={"aa03"} 
              navigateTo="/"
              title="Neumáticos" 
              imageSource={ StaticImages.icons.shockAbsorbers } 
              style={ styles.element } />,
          ]}
        </WrapView>
      </ScrollView>
    </SafeAreaView>
  );
};


export default HomeStation;
