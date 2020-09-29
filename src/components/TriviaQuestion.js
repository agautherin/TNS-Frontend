import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Choice from './Choice'

class TriviaQuestion extends Component{

    state = {
        correctAnswers: [],
        showAnswer: false, 
        choices: [],
        newArr: false
    }

    clickAnswer = () => {
        if (this.state.showAnswer === true){
            if (this.state.correct[this.state.correct.length - 1] === this.props.correct){
                console.log('correct')
                this.setState({
                    showAnswer: false,
                    newArr: false
                }, this.props.nextQuestion(1))
            } else {
                console.log('incorrect')
                this.setState({
                    showAnswer: false,
                    newArr: false
                }, this.props.nextQuestion(0))
                
            }
        } else {
            if (e.target.innerText === this.props.correct){
                console.log('correct')
                this.setState({
                    showAnswer: true,
                    correct: [...this.state.correctAnswers, this.props.correct]
                })
            } else {
                console.log('incorrect')
                this.setState({
                    showAnswer: true
                })
            }
            
        }
    }

    mixUpArr = () => {
        if (this.state.newArr === false) {
            if (this.state.choices.length === 0){
                let fakeArr = [...this.props.choices.incorrect, this.props.choices.correct]
                let j, x, i;
                for (i = fakeArr.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = fakeArr[i];
                    fakeArr[i] = fakeArr[j];
                    fakeArr[j] = x;
                }
                
                this.setState({
                    choices: fakeArr,
                    newArr: true
                })

            } else if (this.state.choices.length > 0) {
                let fakeArr = [...this.props.choices.incorrect, this.props.choices.correct]
                let j, x, i;
                for (i = fakeArr.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = fakeArr[i];
                    fakeArr[i] = fakeArr[j];
                    fakeArr[j] = x;
                }
                
                this.setState({
                    choices: fakeArr,
                    newArr: true
                })
            }
        }

    }

    componentDidMount(){
        this.setState({
            correct: [],
            showAnswer: false
        })
    }

    render(){
        this.mixUpArr()
        // console.log(this.props.choicesObj)
        return(
            <View>
                <Text>{this.props.questionObj}</Text>
                {this.state.choices.map(choice => <Choice choiceObj={choice} key={choice}/>)}
            </View> 
        )
    }
    
}

export default TriviaQuestion