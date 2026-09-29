import { Link } from "expo-router";
import { styled } from 'nativewind';
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView)


export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <View className="flex-row gap-2">
        <Link href="/(auth)/sign-up" className="px-4 py-2 bg-black text-white">Sign up</Link>
        <Link href="/(auth)/sign-in" className="px-4 py-2 bg-black text-white">Sign in</Link>
      </View>
    </SafeAreaView>
  );
}