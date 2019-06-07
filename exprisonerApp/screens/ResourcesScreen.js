import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

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
        </View>
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
