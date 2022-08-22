import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

//30.8606954,75.8573778
export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={
        {
          latitude:30.8606954,
          longitude:75.8573778,
          latitudeDelta:0,
          longitudeDelta:0,
        }

      }
      >
<marker>coordinate={{latitude:30.8606954,longitude:75.8573778}}, 
title={"gne college"}
description ={"engineering college"}
pincolor={"red"}
</marker>
    
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