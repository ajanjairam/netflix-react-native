import React, { useState, useEffect } from "react";
import { TMDB_IMAGE_URL } from "@env";
import { SvgXml } from "react-native-svg";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { View, Text, ImageBackground, Image } from "react-native";
import { NetflixLogo } from "../helpers/svg-files";

const Header = React.memo(({ data, profile }) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(data[Math.floor(Math.random() * data.length)]);
  }, [data]);
  if (movie === undefined) return;
  return (
    <View className="w-full h-fit">
      <ImageBackground
        source={{ uri: `${TMDB_IMAGE_URL}${movie.poster_path}` }}
        className="relative w-full h-[480px] object-cover"
      >
        <View className="h-24 w-full bg-gradient-to-b from-black to-transparent absolute top-0 z-10" />
        <View className="h-24 w-full bg-gradient-to-t from-black to-transparent absolute bottom-0 z-10" />
        <View className="p-3 flex-row items-center justify-between">
          <SvgXml xml={NetflixLogo} height="50" width="120" />
          <View className="flex-row items-center space-x-2">
            <AntDesign name="search1" size={24} color="white" />
            <Image
              source={{ uri: profile.image }}
              className="w-8 h-8 rounded"
            />
          </View>
        </View>
        <View className="flex-row items-center justify-center w-4/5 m-5 pl-5 space-x-5">
          <Text className="text-white font-semibold text-[15px] font-netflix">
            TV Shows
          </Text>
          <Text className="text-white font-semibold text-[15px] font-netflix">
            Movies
          </Text>
          <Text className="text-white font-semibold text-[15px] font-netflix">
            Categories
          </Text>
        </View>
      </ImageBackground>
      <View className="flex-row items-center justify-around mt-4">
        <View>
          <AntDesign
            name="plus"
            size={24}
            color="white"
            style={{ textAlign: "center" }}
          />
          <Text className="text-white text-[17px] font-bold font-netflix">
            My List
          </Text>
        </View>
        <View className="bg-white p-[6px] flex-row rounded-md items-center w-28 justify-center">
          <Entypo name="controller-play" size={24} color="black" />
          <Text className="text-[17px] font-bold font-netflix">Play</Text>
        </View>
        <View>
          <AntDesign
            name="infocirlceo"
            size={24}
            color="white"
            style={{ textAlign: "center" }}
          />
          <Text className="text-white text-[17px] font-bold font-netflix">
            Info
          </Text>
        </View>
      </View>
    </View>
  );
});
export default Header;
