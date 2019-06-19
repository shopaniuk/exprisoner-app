import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import MapView from 'react-native-maps'

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Job Map',
    headerStyle: { backgroundColor: '#e5d982' },
    headerTitleStyle: { fontWeight: 'bold', fontSize: 25},
    headerTintColor: '#fff',
  };
  render() {
    return (
        <MapView style = {{flex: 1}} region = {{latitude: 33.166039, longitude:
              -117.337929,latitudeDelta: 0.0922, longitudeDelta: 0.0421}} showsUserLocation={true}
        />
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      backgroundColor: '#fff',
    },
    item: {
      padding: 20,
      fontSize: 18,
      height: 44,
      textAlign: 'center',
    },
});
