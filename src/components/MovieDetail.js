import { View, Text, Pressable } from "react-native";
import { Octicons, Entypo } from "@expo/vector-icons";

function MovieDetail({ data }) {
  return (
    <View className="mx-2 space-y-3">
      <Text className="text-white font-netflix text-2xl font-black">
        {data?.title || data?.name}
      </Text>
      <View className="flex-row space-x-2">
        <Text className="text-netflix-gray-text">
          {"release_date" in data
            ? data.release_date.split("-")[0]
            : data.first_air_date.split("-")[0]}
        </Text>
        <Text className="text-white bg-netflix-gray-text p-[2px] text-xs rounded-sm">
          U/A
        </Text>
      </View>
      <View className="space-y-2">
        <Pressable className="bg-white p-1 rounded flex-row items-center justify-center space-x-2">
          <Entypo name="controller-play" size={24} color="black" />
          <Text className="font-netflix text-lg font-semibold">Play</Text>
        </Pressable>
        <Pressable className="bg-netflix-gray-text p-1 rounded flex-row items-center justify-center space-x-2">
          <Octicons name="download" size={24} color="white" />
          <Text className="font-netflix text-lg text-white font-semibold">
            Download
          </Text>
        </Pressable>
      </View>
      <View>
        <Text className="text-white">{data.overview}</Text>
      </View>
    </View>
  );
}

export default MovieDetail;
