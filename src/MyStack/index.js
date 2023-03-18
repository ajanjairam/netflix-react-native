import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useFonts } from "expo-font";
import { auth } from "../../firebase";
import LoadingStack from "./LoadingStack";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function MyStack() {
  const [isAppstack, setIsAppStack] = useState(false);

  const [isFontsLoaded] = useFonts({
    "Netflix Regular": require("../../assets/fonts/NetflixSans_W_Rg.otf"),
    "Netflix Medium": require("../../assets/fonts/NetflixSans_W_Md.otf"),
    "Netflix Bold": require("../../assets/fonts/NetflixSans_W_Bd.otf"),
    "Netflix Black": require("../../assets/fonts/NetflixSans_W_Blk.otf"),
  });
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) =>
      user ? setIsAppStack(true) : setIsAppStack(false)
    );

    return unSubscribe;
  }, []);
  if (!isFontsLoaded) return <LoadingStack />;
  else if (isAppstack) return <AppStack />;
  else return <AuthStack />;
}

export default MyStack;
