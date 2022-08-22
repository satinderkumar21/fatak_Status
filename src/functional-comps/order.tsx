
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';




/*function OrdersScreen() {
    return (
      <View style={styles.container}>
       <text>this my orders Screen</text>
      </View>
    );
  } */


  export default function OrdersScreen(){
    return (
      <View style={styles.container}>
        <text> This is my Orders Screen</text>
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