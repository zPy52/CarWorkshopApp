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
        { padding: Insets.submedium },
        { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
        style,
      ]}>
        <Image
          source={imageSource}
          style={{ width: '70%', height: '70%' }}
          resizeMode="contain"
        />
        <Text style={[
          theme.text.labelMedium,
          {color: theme.colors.onBackground, marginTop: Insets.small, fontWeight: 'bold', opacity: 0.6 },
        ]}>
          { title }
        </Text>
      </View>
    </Clickable>
  )
}
