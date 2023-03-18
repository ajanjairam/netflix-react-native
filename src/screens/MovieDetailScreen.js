import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { MovieDetail } from "../components";
import { TMDB_BASE_URL, TMDB_API_KEY } from "@env";
import { useRoute } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StatusBar,
  View,
  Pressable,
  Image,
  Dimensions,
} from "react-native";

function MovieDetailScreen() {
  const [trailer, setTrailer] = useState("IZicQQVQHO0");
  const route = useRoute();
  const { data, profile } = route.params;
  const {
    isLoading,
    isSuccess,
    data: trailerData,
  } = useQuery({
    queryKey: ["trailer", data.id],
    queryFn: () =>
      fetch(
        `${TMDB_BASE_URL}/${"first_air_date" in data ? "tv" : "movie"}/${
          data.id
        }/videos?api_key=${TMDB_API_KEY}`
      ).then((response) => response.json()),
  });
  useEffect(() => {
    if (isSuccess) {
      for (let i = 0; i < trailerData.results.length; i++) {
        if (
          trailerData.results[i].type === "Trailer" &&
          trailerData.results[i].site === "YouTube"
        ) {
          setTrailer(trailerData.results[i].key);
          break;
        }
      }
    }
  }, [data, isSuccess, trailerData]);

  return (
    <ScrollView
      className="flex-1 bg-black"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="flex-row items-center justify-between ml-2 mr-5">
        <Pressable>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
        <View className="flex-row items-center space-x-5">
          <AntDesign name="search1" size={24} color="white" />
          <Image source={{ uri: profile.image }} className="w-8 h-8 rounded" />
        </View>
      </View>
      <View className="mt-3 w-full max-h-fit">
        <YoutubePlayer
          height={Dimensions.get("screen").width * (9 / 16)}
          width={Dimensions.get("screen").width}
          play={true}
          videoId={trailer}
        />
      </View>
      <MovieDetail data={data} />
    </ScrollView>
  );
}

export default MovieDetailScreen;
