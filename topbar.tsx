import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import HomeScreen from './src/functional-comps/home';
import ProfileScreen from './src/functional-comps/Profile';
import OrdersScreen from './src/functional-comps/order';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



/*
 function HomeScreen({navigation}:any) {
  return (
    <View style={styles.container}> 
      <text>this my Home Screen</text>
      <Button title='Go To Profile'
      onPress={()=>navigation.navigate("Profile")}
      ></Button>
    </View>
  );
}

function ProfileScreen()  {
  return (
    <View style={styles.container}>
      <text>this my Profile</text>
    </View>
  );
}


 function OrdersScreen() {
  return (
    <View style={styles.container}>
     <text>this my orders Screen</text>
    </View>
  );
} */

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName = 'Home'>
      <Stack.Screen name = 'Home' component={HomeScreen}/>
      <Stack.Screen name = 'Profile' component={ProfileScreen}/>
      <Stack.Screen name = 'Orders' component={OrdersScreen}/>
    </Stack.Navigator>
   </NavigationContainer>

  );
}

