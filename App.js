import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Vibration } from "react-native";
import SvgComponent from "./src/svg/fabs";
import Network from './src/network/network'
import { Pattern } from "react-native-svg";

export default function App() {

 

  return (
    <>
      <View style={styles.container}>
        <View>
          <SvgComponent />
        </View>

        <Text>Crear hotspot</Text>
        <Network />
        
        
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(236, 182, 84)",
    alignItems: "center",
  },
});
