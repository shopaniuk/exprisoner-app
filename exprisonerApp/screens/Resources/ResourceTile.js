import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';


const ResourceTile = (props) => {
    // Current Problem: Need to get around loading the images 
    // Possible solution. Webhosting the images from a backend API that serves resources to display
    return(
        <View style = {{backgroundColor: '#D3D3D3', alignSelf: 'flex-start', margin: 3}}>
            <Image source={require(props.resource.image)}/>
            <Text>{props.resource.text}</Text>
        </View>
    );
}
export default ResourceTile;