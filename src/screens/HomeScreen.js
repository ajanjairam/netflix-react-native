import { useQueries } from "react-query";
import { tmdbAPI } from "../helpers/ext-data";
import { TMDB_API_KEY, TMDB_BASE_URL } from "@env";
import { useRoute } from "@react-navigation/native";
import { Header, Trending, MovieRow } from "../components";
import { View, StatusBar, ScrollView } from "react-native";

function HomeScreen() {
  const route = useRoute();
  const { profile } = route.params;
  const results = useQueries(
    tmdbAPI.map((api) => {
      return {
        queryKey: ["tmdb", api.id],
        queryFn: async () => {
          const params =
            api.param.length > 0
              ? api.param
                  .map((param) => `${param.key}=${param.value}`)
                  .join("&")
              : "";
          return await fetch(
            `${TMDB_BASE_URL}${api.path}/${api.type}?api_key=${TMDB_API_KEY}&${params}`
          )
            .then((response) => response.json())
            .then((data) => data.results);
        },
      };
    })
  );
  const trendingToday = results[0];
  const netflixShows = results[2];
  return (
    <ScrollView
      className="flex-1 bg-black"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {netflixShows.isSuccess && netflixShows.data && (
        <Header data={netflixShows.data} profile={profile} />
      )}
      {trendingToday.isSuccess && trendingToday.data && (
        <Trending data={trendingToday.data} />
      )}
      <View>
        {results.map((movieSet, index) => (
          <MovieRow
            key={index}
            dataSet={movieSet}
            profile={profile}
            title={tmdbAPI[index].name}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
