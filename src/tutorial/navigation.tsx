import * as React from 'react';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

//30.8606954,75.8573778

 function HomeScreen() {
  return (
    <View style={styles.container}>
     
<text>this my homescreen</text>
    </View>
  );
}


 function OrderScreen() {
  return (
    <View style={styles.container}>
     
<text>this my orderscreen</text>
    </View>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
     
<text>this my app</text>
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