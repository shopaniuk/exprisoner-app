import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Resources from './Resources/ResourceTile';

export default class ResourcesScreen extends React.Component {
  static navigationOptions = {
    title: 'Resources',
    headerStyle: { backgroundColor: '#e5d982'  },
    headerTitleStyle: { fontWeight: 'bold', fontSize: 25},
    headerTintColor: "#fff",
  };

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>
                Resources!
            </Text>
            <Resources resource = {resource}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: '#fff',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      textAlign: 'center',
    },
});




//This will serve as Props within the Resource Component.  I iwll pass it the presentional comps through props
const resource = {
  image: './newlife_second_chance_outreach.png',
  text: "NewLife Second Chance Outreach",
  url: "https://www.nlscoinc.org/"

}
