import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

class Choice extends Component{



    render(){
        console.log(this.props)
        return(
            <View>
                <Text>{this.props.choiceObj}</Text>
            </View>
        )
    }
}

export default Choice