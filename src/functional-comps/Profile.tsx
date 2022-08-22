
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';



/*function ProfileScreen()  {
    return (
      <View style={styles.container}>
        <text>this my Profile</text>
      </View>
    );
  }*/

  export default function ProfileScreen(){
    return (
      <View style={styles.container}>
        <text> This is my Profile Screen</text>
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