import { useState } from "react";
import { auth } from "../../firebase";
import { plans } from "../helpers/ext-data";
import { useRoute } from "@react-navigation/native";
import { Feather, Fontisto, Entypo } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Text, View, ScrollView, StatusBar, Pressable } from "react-native";

function PlanScreen() {
  const route = useRoute();
  const [price, setPrice] = useState(0);
  const { email, password } = route.params;
  const [selectedPlan, setSelectedPlan] = useState("");
  return (
    <>
      <ScrollView
        className="flex-1"
        style={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View className="p-3 pt-0">
          <Text className="text-lg font-semibold">
            Choose a plan that is right for you.
          </Text>
          <View className="flex flex-row items-center mt-3">
            <Feather name="check" size={24} color="#E50914" />
            <Text className="ml-1 font-semibold">
              Watch all you want & Ad free.
            </Text>
          </View>
          <View className="flex flex-row items-center mt-3">
            <Feather name="check" size={24} color="#E50914" />
            <Text className="ml-1 font-semibold">
              Recomendations just for you.
            </Text>
          </View>
          <View className="flex flex-row items-center mt-3">
            <Feather name="check" size={24} color="#E50914" />
            <Text className="ml-1 font-semibold">
              Cancel your plan anytime.
            </Text>
          </View>
          <View className="mt-5 space-y-6">
            {plans.map((plan, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setPrice(plan.price);
                  setSelectedPlan(plan.name);
                }}
                className={`h-48 rounded-lg border-netflix-red p-4 ${
                  selectedPlan === plan.name ? "border-2" : "border-[0.5px]"
                }`}
              >
                <View className="flex-row justify-between">
                  <View className="bg-netflix-red-button p-2 w-28 rounded-md">
                    <Text className="text-center text-white font-semibold">
                      {plan.name}
                    </Text>
                  </View>
                  <Text className="text-lg">Price: ₹{plan.price}</Text>
                </View>
                <View className="mt-4 flex-row items-center justify-between">
                  <View>
                    <Text className="text-netflix-gray-text text-[15px]">
                      Video Quality: {plan.videoQuality}
                    </Text>
                    <Text className="mt-1">Resolution: {plan.resolution}</Text>
                  </View>
                  <Fontisto
                    name="netflix"
                    size={28}
                    style={{ marginRight: 6 }}
                  />
                </View>
                <View className="mt-2 flex-row items-center">
                  <Text>Devices you can watch on:</Text>
                  <View className="flex-row space-x-1 items-center">
                    {plan.devices.map((device, index) => (
                      <Entypo
                        name={device.name}
                        size={20}
                        color="#E50914"
                        key={index}
                      />
                    ))}
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
      {selectedPlan.length > 0 && (
        <View className="bg-netflix-red p-3 items-center flex-row justify-between">
          <Text className="text-white font-semibold">
            Selected Plan: {selectedPlan}
          </Text>
          <Pressable
            className="bg-white rounded p-1"
            onPress={() =>
              createUserWithEmailAndPassword(auth, email, password)
            }
          >
            <Text className="uppercase font-bold text-netflix-red">
              PAY ₹{price}
            </Text>
          </Pressable>
        </View>
      )}
    </>
  );
}

export default PlanScreen;
