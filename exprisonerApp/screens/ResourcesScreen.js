import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Resources from './Resources/ResourceTile';
import ResList from './Resources/ResourceList'

export default class ResourcesScreen extends React.Component {
  static navigationOptions = {
    title: 'Resources',
    headerStyle: { backgroundColor: '#e5d982'  },
    headerTitleStyle: { fontWeight: 'bold', fontSize: 25},
    headerTintColor: "#fff",
  };

  constructor(props){
    super(props);

    this.state = {
      location : "Georgia"
    }
  }

  

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>
                Resources!
            </Text>
            <ResList links = {Washington} ></ResList>
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
const Washington = [ { url:
  'http://www.washingtonci.com/about-ci/offender-re-entry.html',
 title: 'DOC Reentry',
 desc: 'Information about the state run reentry program' },
{ url: 'http://4people.org/Reentry/Reentry.html',
 title: 'Ex-offender links by county',
 desc: 'Very helpful' },
{ url:
  'https://www.sbctc.edu/colleges-staff/programs-services/prisons/',
 title: 'Next Steps Re-Entry Program',
 desc:
  'A pathway from prison to higher education  Snohomish CountyWA. Edmonds Community College 20000 68th AveW LynnwoodWA 98036' } ]
