import React from 'react';
import { Image, FlatList, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import call from 'react-native-phone-call';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'Call',
      headerStyle: { backgroundColor: '#e5d982' },
      headerTitleStyle: { fontWeight: 'bold', fontSize: 25},
      headerTintColor: "#fff",
  };




  render() {
   return (
       <View style={styles.container}>

       </View>
   );
 }
}
//Ok this is just a placeholder for now, its gonna randomly choose a number from db
const args = {
  number: '8164018488', // String value with the number to call
  prompt: true 
}

//Just gotta bind an onClick to this badboy
call(args).catch(console.error)

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#c1cacd',
 },
 item: {
   padding: 10,
   fontSize: 18,
   height: 44,
   color: '#000',
   backgroundColor: '#fff',
   borderColor: '#c1cacd',
   borderRadius: 4,
   borderWidth: 0.5,
 },
});
