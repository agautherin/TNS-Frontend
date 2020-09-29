import React from 'react';
import {View, Text, Button} from 'react-native';

const ResultsScreen = (props) => {
    
    return(
        <View>
            <Button
            title="Take another quiz"
            onPress={() => props.newQuiz()}
            />
        </View>
    )
}

export default ResultsScreen