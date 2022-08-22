import { StatusBar } from 'expo-status-bar';
import { Component, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';



const Item = (itemData:any) =>(
  <View style={styles.item}>
<Image source={{uri: itemData.urlToImage}} style={styles.image}></Image>
<Text style={styles.title} >{itemData.title}</Text>
<Text style={styles.subTitle} >{itemData.publishedAt}</Text>

  </View>
);



const renderItem  =({item}:any) => Item(item);

export default function App() {

  const url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=5ebc78bf47994201a2ad402d7ba38b05"
  const [news, setNews] = useState([]);
  const[showIndicator, setIndicator] = useState(true);

  const getNewsFromNewsAPI = async () =>{
    try{
      const responseFromAPI= await fetch (url);
      console.log("responseFromAPI");
      console.log(responseFromAPI);

      const jsonData = await responseFromAPI.json();
      console.log("jsonData");
      console.log(jsonData);

     const articles = jsonData['articles'];
     console.log("articles");
     console.log(articles);

     setNews(articles);
     setIndicator(false);

    }catch(error){
      console.error("something went wrong : " + error);
    }

    }
    useEffect(()=>{
    getNewsFromNewsAPI();
    
  }, []);

  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />

{
      showIndicator ? <ActivityIndicator/>
      :<FlatList data={news} renderItem={renderItem}/>
}
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
    color: 'black'
  
  
    
  },

  image:{
    width: 250,
    height:200,
    margin:8,
    alignItems: 'center',
  
  }

  
});
