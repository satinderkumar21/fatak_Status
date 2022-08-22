
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import SignInScreen from './src/screens/SignInScreen';
import RegisterScreen from './src/screens/RigisterScreen';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './src/helper/Constants';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useEffect } from 'react';
import { Appbar } from 'react-native-paper';
import homeScreen from './src/screens/homeScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
 
export default function App({navigation}:any) {
const [showSplash, setShownSplash] = useState(true)
const [loggedIn, setLoggedIn] = useState(false);
   initializeApp(firebaseConfig);

useEffect( 
  ()=>{
const auth =getAuth();

onAuthStateChanged(auth, (user) =>{
  if(user!=null){
  setTimeout(()=>{
    console.log("user is already Register or logged In: "+user.uid);
    setLoggedIn(true);
    setShownSplash(false);
  },3000)
  }
else{
  setTimeout(()=>{
    console.log("user is already Register or logged In: ");

    setShownSplash(false);
  },3000)
}


}

);
},

/*async function showSplashScreen(){
  const auth = getAuth();
  if(auth.currentUser!=null){
    console.log("user is already Register or logged In: ")
    setLoggedIn(true);
  }else{
    console.log("User is not Register or Logged In")
  }
 /*await new Promise(resolve => setTimeout(resolve,3000));
  console.log("wait for 3 seconds over...");
  setShownSplash(false);
}

try{
  showSplashScreen();
}catch(error){
  console.log("Something Went Wrong: "+error);
}finally{
  console.log("Finally Executed..");
}
},*/
[]);
 
if(showSplash){

  return (
   <View style={styles.container}>
    <Text>Phatak Status</Text>
   </View>
  );
}

if(loggedIn){

    return (
      <NavigationContainer>

        <Stack.Navigator initialRouteName='homeScreen'>
          <Stack.Screen name = 'SignInScreen' component={SignInScreen}/>
          <Stack.Screen name = 'RegisterScreen' component={RegisterScreen}/>
          <Stack.Screen name='homeScreen' component={homeScreen} options={{
        title : "PhatakApp",
        headerRight: () => (
                <Appbar.Action
                // https://materialdesignicons.com/ (for icon names)
                icon="logout"
                onPress = {()=> {
                  const auth = getAuth();
                  auth.signOut();
                  setLoggedIn(false)
                  setShownSplash(true);
                }}
                />
              )
              }}/> 

        </Stack.Navigator>
      </NavigationContainer>

    );
  }else{

    return(
      <NavigationContainer>
         <Stack.Navigator initialRouteName='SignInScreen'>
            <Stack.Screen name='SignInScreen' component={SignInScreen}/>
            <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
            <Stack.Screen name='homeScreen' component={homeScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    margin: 12
  }
});


