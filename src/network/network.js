import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ToastAndroid,
  PermissionsAndroid,
} from "react-native";

import * as Permissions from 'expo-permissions';

function network(props) {
  const [SSID, setSsid] = useState("");
  const [password, setPassword] = useState("");


  async function checkIt() {


        const checkPermission = await Permissions.askAsync(Permissions.SYSTEM_BRIGHTNESS)

        
      console.log(checkPermission)
      console.log("hola chatio ")
      
   

      
  }
 

  return (
    <>
      <TextInput
        onChangeText={(SSID) => setSsid(SSID)}
        placeholder="ssid"
        value={SSID}
      />
      <TextInput
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        value={password}
      />

      <Button title="Crear hotspot" onPress =  {() => checkIt()}  />
    </>
  );
}

export default network;


// import React from "react";
// import PropTypes from "prop-types";
// import { View, Text, Button, TextInput, ToastAndroid } from "react-native";
// import * as Permissions from 'expo-permissions';

// //Third party
// import Hotspot from "react-native-wifi-hotspot";

// class Network extends React.Component {
   

//   static navigationOptions = {
//     title: "Create your hotspot"
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       SSID: "",
//       password: ""
//     };
//   }
//   //Create your hotspot
//   //This work succesfully once you enable hotspot. Otherwise it throw errors
//   onCreate = () => {
//     Hotspot.create(
//       this.state,
//       () => {
//         ToastAndroid.show("Hotspot Established", ToastAndroid.SHORT);
//         this.props.navigation.pop();
//       },
//       err => {
//         ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
//       }
//     );
//   };
//   render() {
//     return (
//       <View>
//         <Text>Set Your hotspot </Text>
//         <TextInput
          
//           onChangeText={SSID => this.setState({ SSID })}
//           placeholder="SSID"
//           value={this.state.SSID}
//         />
//         <TextInput
          
//           onChangeText={password => this.setState({ password })}
//           placeholder="Password"
//           secureTextEntry
//           value={this.state.password}
//         />
//         <Button title="Create" onPress={this.onCreate} />
//       </View>
//     );
//   }
// }

// export default Network;
