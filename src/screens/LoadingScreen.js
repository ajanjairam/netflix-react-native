import { SafeAreaView, StatusBar, Text } from "react-native";

function LoadingScreen() {
  return (
    <SafeAreaView
      className="flex-1 bg-black p-3 items-center"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Text className="text-white">Loading...Please wait.</Text>
    </SafeAreaView>
  );
}

export default LoadingScreen;
