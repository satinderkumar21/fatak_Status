import { StatusBar } from 'expo-status-bar';
import { Component, useState } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';

const foodMenu =[
  
  {
    name : "noodle",
    price : "400",
    qantity : "1 plate",
    review :  "4star",

  },
  
  {
    name : "burger",
    price : "80",
    qantity : "1 piece",
    review :  "4star",

  },
  
  {
    name : "pizza",
    price : "300",
    qantity : "4 slices",
    review :  "4star",

  },
  
];

const Item = (itemData:any) =>(
  <View style={styles.item}>
<Text style={styles.title} >{itemData.name}</Text>
<Text style={styles.subTitle} >{itemData.price}</Text>
<Text style={styles.review} >{itemData.review}</Text>
  </View>
);



const renderItem  =({item}:any) => Item(item);

export default function App() {

  

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <FlatList data={foodMenu} renderItem={renderItem}></FlatList>
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

  
  textStyle:{
    fontSize: 24,
    color: "#f00",
    marginBottom: 20
  },

  background:{
    backgroundColor: '#eff',
    fontSize: 24,
    marginBottom: 20

  },

  item: {
    backgroundColor: '#fff',
    padding: 8,
    margin: 6
  },

  title: {
    fontSize: 16,
    color: '#f00'
  },

  subTitle: {
    fontSize: 12,
    color: '#f23'
  },

  review: {
    fontSize:12,
    color:'#fff'
  },
  
});
