import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';
import Choice from './Choice'

class TriviaQuestion extends Component{

    state = {
        correctAnswers: [],
        showAnswer: false, 
        choices: [],
        newArr: false,
        correct: []
    }

    clickAnswer = (choice) => {
        
        if (this.state.showAnswer === true){
            if (this.state.correct[this.state.correct.length - 1] === this.props.correct){
                console.log('correct')
                this.setState({
                    showAnswer: false,
                    newArr: false
                }, this.props.numberCorrect === 21
                ?
                this.props.nextQuestion(25 - this.props.numberCorrect, 25 - this.props.i)
                :
                this.props.nextQuestion(1, 1))
            } else {
                console.log('incorrect')
                this.setState({
                    showAnswer: false,
                    newArr: false
                }, this.props.i - this.props.numberCorrect <= 5 ?
                    this.props.nextQuestion(0, 1)
                    :
                    this.props.nextQuestion(0, 25 - this.props.i)
                    
                )
                
                
            }
        } else {
            if (choice === this.props.correct){
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

    render(){
        this.mixUpArr()
        // console.log(this.state.choices, this.state.showAnswer)
        return(
            <View>
                <Text>{this.props.question}</Text>
                {/* <FlatList
                    data={this.state.choices}
                    key={}
                /> */}
                {this.state.choices.map(c => <Choice clickAnswer={this.clickAnswer} choiceObj={c} correct={this.props.correct} showAnswer={this.state.showAnswer} newArr={this.state.newArr} key={c}/>)}
            </View> 
        )
    }
    
}

export default TriviaQuestion