import { TMDB_IMAGE_URL } from "@env";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";

function Trending({ data }) {
  return (
    <View className="mt-5 ml-1">
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {data.slice(0, 10).map((movie, index) => (
          <Pressable className="flex-row items-center" key={index}>
            <Text className="text-[85px] text-white font-bold absolute -bottom-5 -left-5 z-10">
              {index + 1}
            </Text>
            <Image
              source={{ uri: `${TMDB_IMAGE_URL}${movie.poster_path}` }}
              className="w-28 m-2 h-36 rounded-md object-cover"
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

export default Trending;
