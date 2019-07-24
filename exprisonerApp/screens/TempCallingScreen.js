import React from 'react';
import { Image, FlatList, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'Help',
      headerStyle: { backgroundColor: '#e5d982' },
      headerTitleStyle: { fontWeight: 'bold', fontSize: 25},
      headerTintColor: "#fff",
  };

  render() {
   return (
       <View style={styles.container}>
         <FlatList
           data={[
             {key: 'Everything about Credit Cards'},
             {key: 'How to navigate the Internet'},
             {key: 'What is Social Media'}

           ]}
           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
         />
       </View>
   );
 }
}

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
