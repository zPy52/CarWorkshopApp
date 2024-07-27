import { useCallback, useRef } from "react";
import {
  ImageURISource,
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
import OnboardingPaginator from "./../../components/onboarding/splash-page/Paginator";
import OnboardingSplashButton from "./../../components/onboarding/splash-page/Button";
import StaticImages from "../../constants/static_images";
import Insets from "../../constants/insets";

const pages = [
  {
    text: "Trusted by millions of people, part of one part",
    image: StaticImages.icons.shockAbsorbers,
  },
  {
    text: "Spend money abroad, and track your expense",
    image: StaticImages.icons.tyres,
  },
  {
    text: "Receive Money From Anywhere In The World",
    image: StaticImages.icons.tyres,
  },
];

export default function OnboardingPage() {
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const flatListRef = useAnimatedRef<
    Animated.FlatList<{
      text: string;
      image: ImageURISource;
    }>
  >();

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
    ({
      item,
      index,
    }: {
      item: { text: string; image: ImageURISource };
      index: number;
    }) => {
      return <OnboardingListItem item={item} index={index} x={x} />;
    },
    [x]
  );

  const styles = useRef(
    StyleSheet.create({
      container: {
        flex: 1,
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
        keyExtractor={(_, index) => `${index}`}
        bounces={false}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View style={styles.bottomContainer}>
        <OnboardingPaginator length={pages.length} x={x} />
        <OnboardingSplashButton
          currentIndex={flatListIndex}
          length={pages.length}
          flatListRef={flatListRef}
        />
      </View>
    </SafeAreaView>
  );
}
