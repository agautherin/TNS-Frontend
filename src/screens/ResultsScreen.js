import React from 'react';
import {View, Text, Button, ScrollView, StyleSheet} from 'react-native';

const ResultsScreen = (props) => {
    // debugger
    console.log(props)
    let num = 1
    return(
        <View >
            <ScrollView>
                {
                props.correct <= 20 
                ? 
                <View>
                    <Text style={styles.header}>
                        I am sorry.  You got more than 4 questions wrong.  You did not pass this time
                    </Text>
                </View>
                :
                <View>
                    <Text style={styles.header}>
                        Congratulations!  You passed because you answered 21 questions correctly! Well done!
                    </Text>
                </View>
                }
                {props.trivia.map(trivia => {
                    return (
                        <View style={styles.resultsAnswers}>
                            <Text style={styles.questions}>
                                {num++}). {trivia[0].question}
                            </Text>
                            <Text style={styles.answer}>
                                Answer: {trivia[0].choices.correct}
                            </Text>
                        </View>
                    )
                })}
                <Button
                title="Take another quiz"
                onPress={() => props.newQuiz()}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    header: { 
        textAlign: "center", 
        fontSize: 20, 
        backgroundColor: '#00b300',
        margin: "5%", 
    },
 
    resultsAnswers: {
        margin: "5%"
    },
    answer: {
        marginTop: '3%'
    },
    questions: {
        fontSize: 17.5
    }
})

export default ResultsScreen

{/* <div>
                <h1 className='results-header'>You got a {this.props.correct} out of {this.props.allQuestions}.  That equates to a score of {this.props.correct/this.props.allQuestions * 100}%!</h1>
                <br/>
                <br/>
                {this.props.trivia.map(trivia => (
                    <div className='results-answer'>
                        <h4>{num++}). {trivia[0].question}</h4>
                        <p>{trivia[0].choices.correct}</p>
                        <br/>
                    </div>
                ))}
                <button type='click' onClick={this.props.newQuiz} className='button-center'>Click this to take a new Quiz!</button>
            </div> */}

// .results-answer {
//     position: relative;
//     top: 20px;
//     text-align: left;
//     }

// .results-header {
//     position: relative;
//     text-align: center;
//     font-size: 3em;
//     color: #00b300;
//     top: 50px
//   }