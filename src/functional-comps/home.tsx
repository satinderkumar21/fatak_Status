import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';


/*function HomeScreen({navigation}:any) {
    return (
      <View style={styles.container}> 
        <text>this my Home Screen</text>
        <Button title='Go To Profile'
        onPress={()=>navigation.navigate("Profile")}
        ></Button>
      </View>
    );
  } */

  export default function HomeScreen(){
    return (
      <View style={styles.container}>
        <text> This is my Home Screen</text>
      </View>
    )
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });