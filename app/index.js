import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


// To run in Expo Go: npx expo start --tunnel
//   -> Dependencies: npm i -g expo-cli
export default function Page() {
  return (
    <SafeAreaView>
      <Text>Home page</Text>
    </SafeAreaView>
  )
}
