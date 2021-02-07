import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font"; // load expo font
import AppLoading from "expo-app-loading"; // loading screen component

// components
import Header from "./src/components/Header";
import Card from "./src/components/Card";

// load fonts
const loadFonts = () => {
  // Must use Font.loadAsync to load custom fonts. Pass in an object to reference our fonts.
  return Font.loadAsync({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} onError={(err) => console.error(err) }/>;
  }

  return (
    <View>
      <Header title={"Dwayne's News App"} />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({});
