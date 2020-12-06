import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import SvgComponent from './src/svg/fabs'




export default function App() {
  

  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  return (
    <>
    <View style = {styles.container}>
    <View>
        <SvgComponent />
      </View>
      
      <Text>Crear hotspot </Text>
      <TextInput placeholder="Nombre de la red" value={name} /> 
      <TextInput placeholder="Password" value={password} /> 
      <Button title = "Change text" />
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(236, 182, 84)',
    alignItems: 'center'
  },
});
