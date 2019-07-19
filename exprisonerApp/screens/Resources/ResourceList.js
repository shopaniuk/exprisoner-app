import React, { Component } from 'react'

export default class ResourceList extends Component {
    constructor(props) {
        this.props.links = false;
    }
    render() {
        return (
            <View>
                {this.props.links.map((entry) =>
                    <Text> {entry[title]} </Text>
                    )}
                
            </View>
        )
    }
}
