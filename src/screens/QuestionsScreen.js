import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TriviaQuestion from '../components/TriviaQuestion';


class QuestionsScreen extends Component{
    state = {
        data: null,
        i: 0
    }

    componentDidMount(){
        fetch(`http://localhost:3000/quiz`)
        .then(res => res.json())
        .then(data => this.setState({
            data: data
        }))
    }

    

    render(){
        // console.log(this.state.data)
        // debugger
        return(
            <View>
                {this.state.data === null ? null : this.state.data.question[this.state.i].map(trivia => <TriviaQuestion questionObj={trivia.question} choices={trivia.choices} key={trivia.question}/>)}
                
            </View>
        )
    }
}

export default QuestionsScreen