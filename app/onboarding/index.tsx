import { useCallback, useRef } from "react";
import {
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  View,
  ViewToken,
} from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import OnboardingListItem from "../../components/onboarding/splash-page/Item";
import OnboardingPaginator from "../../components/onboarding/splash-page/Paginator";
import OnboardingSplashButton from "../../components/onboarding/splash-page/Button";
import StaticImages from "../../constants/static_images";
import Insets from "../../constants/insets";

type ItemProps = {
  description: string;
  title: string;
  image: ImageSourcePropType;
};

const pages: ItemProps[] = [
  {
    title: "Recogida a domicilio",
    description:
      "Cuando nos contratas vamos nosotros a por tu vehículo y te lo devolvemos cuando y donde digas.",
    image: StaticImages.onboarding.fromHome,
  },
  {
    title: "Revisiones y cambios de neumáticos",
    description:
      "Cambiamos tus neumáticos a golpe de clic y hacemos las revisiones que hagan falta.",
    image: StaticImages.onboarding.tyresAndFixes,
  },
  {
    title: "Hacemos que tu coche funcione a las mil maravillas",
    description:
      "Puedes contratar cualquier servicio desde la app. Averías, frenos, repuestos, amortiguadores…",
    image: StaticImages.onboarding.workshop,
  },
  {
    title: "PreITV + ITV (desde casa)",
    description:
      "Te revisamos el coche y lo llevamos a la ITV. Te lo recoge y devuelve un mecánico, en tu casa o donde elijas, con la ITV pasada. (Condiciones)",
    image: StaticImages.onboarding.itv,
  },
  {
    title: "Asesoramiento en todo momento",
    description:
      "Si tienes dudas, habla con un mecánico asesor por teléfono. Está disponible para ti en todo momento.",
    image: StaticImages.onboarding.customerService,
  },
];

export default function OnboardingPage() {
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const flatListRef = useAnimatedRef<Animated.FlatList<ItemProps>>();

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      flatListIndex.value = viewableItems[0].index ?? 0;
    },
    []
  );
  const scrollHandle = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const renderItem = useCallback(
    ({ item, index }: { item: ItemProps; index: number }) => {
      return <OnboardingListItem item={item} index={index} x={x} />;
    },
    [x]
  );

  const styles = useRef(
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "white", // This is necessary to match the background of chosen (with background) images
      },
      bottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: Insets.screenMarginMedium,
      },
    })
  ).current;

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={scrollHandle}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled={true}
        data={pages}
        keyExtractor={(_, index) => `onbding-fltlist-elmnt-${index}`}
        bounces={false}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View style={styles.bottomContainer}>
        <OnboardingPaginator length={pages.length} x={x} />
        <OnboardingSplashButton
          x={x}
          length={pages.length}
          flatListRef={flatListRef}
        />
      </View>
    </SafeAreaView>
  );
}
