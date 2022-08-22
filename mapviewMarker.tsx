import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

//30.8606954,75.8573778
export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={
        {
          latitude:30.9024075,
          longitude:75.8201689,
          latitudeDelta:0.75,
          longitudeDelta:0.77,
        }

      }
      >
<Marker 
coordinate={{latitude:30.9024075,longitude:75.8201689}}
title={"Auribises"}
description ={"software Company"}
pinColor={"red"}
/>

    
</MapView>

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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});