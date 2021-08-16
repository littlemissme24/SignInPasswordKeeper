import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  let login = () => {
    setUserName(name)
    setPassword(pass)
  }


  return (
    <View style={styles.container}>



      <View>
    
    <View style={{padding: 8}}>
      <Text>UserName: {userName}</Text>
      <Text>Password: {password}</Text>
    </View>

        <Text> UserName: </Text>

        <TextInput
          onChangeText={text => setName(text)}
          placeholder={"user name"}
          style={{ width: 200, height: 40, borderWidth: 1 }}
        />
        <View style={{padding: 8}}/>
        <Text> Password: </Text>

        <TextInput
          onChangeText={text => setPass(text)}
          placeholder={"password"}
          secureTextEntry={true}
          style={{ width: 200, height: 40, borderWidth: 1 }}
        />

      </View>

      <Pressable
      style={{top: 25, backgroundColor: "blue", borderWidth: 1, height: 40, width: 200, justifyContent: "center", alignItems: "center"}}
      onPress={login}
      >
        <Text style={{color: "white"}}>Log on</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
