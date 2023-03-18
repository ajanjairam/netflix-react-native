import { TMDB_IMAGE_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Pressable, Image } from "react-native";

function MovieRow({ dataSet, title, profile }) {
  const navigation = useNavigation();
  if (dataSet.isSuccess && dataSet.data)
    return (
      <View>
        <Text className="text-white font-bold text-lg font-netflix">
          {title}
        </Text>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
          {dataSet.data.map((data, index) => (
            <Pressable
              key={index}
              onPress={() =>
                navigation.navigate("MovieDetail", { data, profile })
              }
            >
              <Image
                source={{
                  uri: `${TMDB_IMAGE_URL}${
                    data.poster_path ? data.poster_path : data.backdrop_path
                  }`,
                }}
                className="w-24 m-2 h-36 rounded-md object-cover"
              />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  else return;
}

export default MovieRow;
