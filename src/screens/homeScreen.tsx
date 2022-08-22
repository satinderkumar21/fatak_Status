import react,{useEffect, useState} from 'react';
import { StyleSheet,Image, FlatList,Text, View, Dimensions, Button, ActivityIndicator } from 'react-native';
import{ collection,  DocumentSnapshot, getDocs, getFirestore} from 'firebase/firestore';
import{Appbar} from 'react-native-paper'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
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


  const Item = (itemData:any) =>(
    <View style={styles.item}>
  <Image source={{uri: itemData.imageURL}} style={styles.image}></Image>
  <Text style={styles.title} >{itemData.name}</Text>
  <Text style={styles.subTitle} >{itemData.personInchargeName}</Text>
 
    </View>

  
  );




  const renderItem  =({item}:any) => item(item);




  export default function homeScreen({navigation}:any){
console.log("home Screen...");

const[length, setLength] = useState(0);
const[documents, setDocuments] = useState([]);
const[showIndicator, setIndicator] = useState(true);

   const getCrossing = async () =>{
try{
  console.log("Getting crossing....");
  
  
  const db = getFirestore();
  const docs:any = [];

  const querySnapshot = await getDocs(collection(db,"crossing"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    const docData = doc.data();
    docs.push(docData);
  });

 setLength(documents.length);
setDocuments(docs);
setIndicator(false);



}catch(error){
  console.log("Something Went Wrong..");
}

   }
   useEffect(
    ()=>{
      getCrossing();
    },
    []);

    

    return (
      <View style={styles.background}>
      <StatusBar style="auto" />

      {
      showIndicator ? <ActivityIndicator/>
      :<FlatList data={documents} renderItem={renderItem}/>

}




      </View>
    )
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:12,
      margin:12,
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