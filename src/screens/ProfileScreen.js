import { auth } from "../../firebase";
import { SvgUri } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { profiles } from "../helpers/ext-data";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { signOut } from "firebase/auth";

function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1 bg-black p-3"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="flex-row items-center">
        <Pressable>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
        <Text className="text-white text-xl ml-2">Profiles and more</Text>
      </View>
      <View className="items-center">
        <SvgUri
          width="120"
          height="50"
          className="mt-5"
          uri="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        />
      </View>
      <View className="mt-12 items-center">
        <Text className="text-netflix-gray-text font-semibold">
          Who's watching?
        </Text>
        <FlatList
          numColumns={2}
          data={profiles}
          renderItem={({ item }) => (
            <Pressable
              className="my-2 p-5"
              onPress={() => navigation.navigate("Home", { profile: item })}
            >
              <Image
                source={{ uri: item.image }}
                className="w-28 h-28 rounded-lg object-contain"
              />
              <Text className="text-center text-sm text-white mt-2">
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
      <Pressable className="mt-4" onPress={async () => await signOut(auth)}>
        <Text className="text-center text-netflix-gray-text text-lg">
          Sign Out
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default ProfileScreen;
