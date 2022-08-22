import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
 

export default function SignInScreen({navigation}: any) {
  
function signIn(){
    console.log("Email: "+email+"Password: "+password);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User Logged In"+user.uid);
    navigation.navigate("homeScreen");
    
     })
     .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Occured..."+errorCode+" "+errorMessage);
     });
     
     
}

function navigateToRegisterScreen(){
  navigation.navigate("RegisterScreen")

}

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder='Email ID'
        value={email}
        onChangeText={setEmail}
        />
        <TextInput style={styles.input}
        placeholder='password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
        <Button title='Sign In' onPress={signIn}/>

<TouchableOpacity onPress={navigateToRegisterScreen}>
    <Text style={styles.text} >New User? Register Here</Text>
</TouchableOpacity>

      </View>
    );
  
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding :12,
    margin:12,
  },

  input: {
    borderColor:'gray',
    width:'100',
    borderWidth:1,
    borderRadius:12,
    padding:8,
    margin:8,
  },

  text: {
    fontsize :16,
    margin:12,
    color:'blue'
  },

  image: {
    width:70,
    height:70,
    marginBttom:20,
  },



});
