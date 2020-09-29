import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

const ResultsScreen = (props) => {
    // debugger
    console.log(props)
    let num = 1
    return(
        <View>
            <ScrollView>
                {
                props.correct <= 20 
                ? 
                <View>
                    <Text>
                        I am sorry.  You got more than 4 questions wrong.  You did not pass this time
                    </Text>
                </View>
                :
                <View>
                    <Text>
                        Congratulations!  You passed with a {props.correct * 100 / props.i}%!  Well done!
                    </Text>
                </View>
                }
                {props.trivia.map(trivia => {
                    return (
                        <View>
                            <Text>
                                {num++}). {trivia[0].question}
                            </Text>
                            <Text>
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

export default ResultsScreen