import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TriviaQuestion from '../components/TriviaQuestion';
import ResultsScreen from '../screens/ResultsScreen'
import {HOST_WITH_PORT} from '../../environment'


class QuestionsScreen extends Component{
    state = {
        takingQuiz: false,
        trivia: null,
        i: 0,
        numberCorrect: 0
    }

    componentDidMount(){
        
        fetch(`${HOST_WITH_PORT}/quiz`)
        .then(res => res.json())
        .then(data => this.setState({trivia: data.question, takingQuiz: true}))
    }

    nextQuestion = (num) => {
        this.setState({
            i: this.state.i += 1,
            numberCorrect: this.state.numberCorrect += num
        }, () => {})
    
    }

    newQuiz = () => {
        this.setState({
            takingQuiz: false,
            trivia: null,
            i: 0,
            numberCorrect: 0
        })
    }

    render(){
        // console.log(this.state.data)
        // debugger
        return(
            <View>
                {
                    this.state.takingQuiz && this.state.trivia.length === this.state.i
                    ?
                    <ResultsScreen 
                        newQuiz={this.newQuiz} 
                        correct={this.state.numberCorrect} 
                        allQuestions={this.state.i} 
                        trivia={this.state.trivia}
                    />
                    :
                    this.state.takingQuiz 
                    ? 
                    this.state.trivia[this.state.i].map(trivia => 
                        <TriviaQuestion 
                            question={trivia.question} 
                            choices={trivia.choices} 
                            correct={trivia.choices.correct} 
                            nextQuestion={this.nextQuestion}
                        />
                    )
                    :
                    null
                }
            </View>
        )
    }
}

export default QuestionsScreen