import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Insights() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind!
            </Text>
            <View className="flex-row gap-2">
                <Link href="/(auth)/sign-up" className="px-4 py-2 bg-black text-white">Sign up</Link>
                <Link href="/(auth)/sign-in" className="px-4 py-2 bg-black text-white">Sign in</Link>
            </View>
        </View>
    );
}