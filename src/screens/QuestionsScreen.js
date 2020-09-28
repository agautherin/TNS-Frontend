import React, {Component} from 'react';
import {View, Text} from 'react-native';

class QuestionsScreen extends Component{
    state = {
        data: []
    }

    componentWillMount(){
        fetch(`http://localhost:3000/quiz`)
        .then(res => res.json())
        .then(data => this.setState({
            data: data
        }))
    }

    render(){
        console.log(this.state.data)
        return(
        <View>
           <Text>This is the QuestionsScreen</Text>
        </View>
        )
    }
}

export default QuestionsScreen