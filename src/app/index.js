import React from "react";
import { Text, View } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <View
      style={{ marginTop: Constants.statusBarHeight }}
      className="flex-1 bg-neutral-800 w-full h-screen"
    >
      <Text className={"text-center p-2 text-2xl font-bold text-blue-500"}>
        Working on it ...
      </Text>
    </View>
  );
}