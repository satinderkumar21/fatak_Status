import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export default function SignInScreen({navigation}: any): JSX.Element {
  
function register(){
    console.log("Register...");
    console.log("Name: "+Name+" Email: "+email+" Password: "+password);
    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User Register....");

        
      const docToInsert = {
        name: Name,
        email: email,
        password: password
      }

      setDoc(doc(db, "users", user.uid), docToInsert);
      navigation.navigate("homeScreen");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Occured..."+errorCode+" "+errorMessage);
        // ..
      });

}

function navigateToLoginScreen(){
  navigation.navigate("SignInScreen")

}

const [Name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    return (
      <View style={styles.container}>
         <TextInput style={styles.input}
        placeholder='Full Name'
        value={Name}
        onChangeText={setName}
        />
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
        <Button title='Register' onPress={register}/>

<TouchableOpacity onPress={navigateToLoginScreen}>
    <Text style={styles.text} > Existing User User? Register Here</Text>
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

  



});


