import { Text, View } from "react-native";
import { Link } from "expo-router";
import Navbar from "./(routes)/Navbar";
export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Link href="/(tabs)/Profile.tsx/page">Go to Profile</Link>
      <Text>Hello</Text>
      <Navbar/>
    </View>
  );
}
