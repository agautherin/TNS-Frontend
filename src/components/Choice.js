import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

class Choice extends Component{
    state = {
        choice: ''
    }

    renderColor = (choice) => {
        if (this.props.showAnswer === false){
            this.setState({
                choice: choice
            }, () => this.props.clickAnswer(this.state.choice))
        } else {
            // debugger
            this.setState({
                choice: ''
            }, () => this.props.clickAnswer(this.state.choice))
        }
    }

    color = () => {
        // if state color is red AND this is the correct answer --> color should be green
        // if state color is red AND this is NOT the correct answer but it IS the answer you clicked on --> color should be red
        // otherwise color should be white
        if (this.props.showAnswer && this.props.correct === this.props.choiceObj) {
            return "#00b300"
        } else if (this.props.showAnswer && this.state.choice === this.props.choiceObj) {
            return "#E74C3C"
        } else {
            return "#D5D8DC"
        }

    }


    render(){
        // console.log(this.props)
        return(
            <View >
                <Text onPress={() => this.renderColor(this.props.choiceObj)} style={{backgroundColor: this.color()}}>{this.props.choiceObj}</Text>
            </View>
        )
    }
}

export default Choice