import React, { useState, useEffect } from "react";
import { SvgUri } from "react-native-svg";
import useInput from "../helpers/use-input";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";

function RegisterScreen() {
  const navigation = useNavigation();
  const [formIsValid, setFormIsValid] = useState(true);
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurEventHandler: emailBlurHandler,
  } = useInput((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurEventHandler: passwordBlurHandler,
  } = useInput((v) => 3 < v.length && v.length < 61);
  useEffect(
    function () {
      setFormIsValid(emailIsValid && passwordIsValid);
    },
    [emailIsValid, passwordIsValid]
  );
  function signUp() {
    if (formIsValid) navigation.navigate("Plan", { email, password });
    else {
      emailBlurHandler();
      passwordBlurHandler();
    }
  }
  return (
    <SafeAreaView
      className="flex-1 bg-black p-3 items-center"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <KeyboardAvoidingView>
        <View className="items-center">
          <SvgUri
            uri="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            height="50"
            width="120"
          />
        </View>
        <View className="w-[320px] mt-11">
          <Input
            type="email"
            value={email}
            onBlur={emailBlurHandler}
            placeholderTextColor="white"
            onChangeText={emailChangeHandler}
            errorStyle={{ color: "#E87C03" }}
            placeholder="Email or phone number"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            errorMessage={
              emailHasError
                ? "Please enter a valid email address or phone number."
                : ""
            }
            className={`text-white rounded p-4 bg-netflix-gray-form ${
              emailHasError ? "border-b-netflix-yellow-form border-b-2" : ""
            }`}
          />
          <Input
            type="password"
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="white"
            onBlur={passwordBlurHandler}
            errorStyle={{ color: "#E87C03" }}
            onChangeText={passwordChangeHandler}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            errorMessage={
              passwordHasError
                ? "Your password must contain between 4 and 60 characters."
                : ""
            }
            className={`text-white rounded p-4 bg-netflix-gray-form ${
              passwordHasError ? "border-b-netflix-yellow-form border-b-2" : ""
            }`}
          />
        </View>
        <Pressable
          disabled={!formIsValid}
          onPress={signUp}
          className={`w-[300px] mx-auto rounded items-center justify-center ${
            formIsValid ? "bg-netflix-red-button" : "border-white border-2"
          }`}
        >
          <Text className="text-lg font-bold text-center text-white p-3 font-netflix">
            Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default RegisterScreen;
