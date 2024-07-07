import { Image, ImageSourcePropType, StyleProp, View, Text, ViewStyle } from "react-native";
import { useTheme } from "../../hooks/theme";
import Clickable from "../shared/Clickable";
import { router } from "expo-router";
import Insets from "../../constants/insets";


interface Props {
  style?: StyleProp<ViewStyle>;
  navigateTo: string;
  title: string;
  imageSource: ImageSourcePropType;
}

export default function HomeCard({ style, navigateTo, title, imageSource }: Props) {
  const { theme } = useTheme();

  return (
    <Clickable onPress={() => router.navigate(navigateTo)}>
      <View style={[
        { height: '100%', width: '100%' }, 
        { padding: Insets.screenMarginMedium },
        { backgroundColor: theme.colors.onBackground },
        { borderRadius: Insets.small }, 
        { alignContent: 'center', alignItems: 'center', justifyContent: 'center' },
        style
      ]}>
        <Image source={imageSource} style={[
          { width: Insets.layoutMedium, height: Insets.layoutMedium },
        ]} />
        <Text style={[
          theme.text.titleMedium,
          { color: 'red' } 
        ]}>
          { title }
        </Text>
      </View>
    </Clickable>
  )
}