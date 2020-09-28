import React from 'react';
import {Text, View, Button} from 'react-native';

const TriviaScreen = ({navigation}) => {
    
    return(
        <View>
        <Text>This is the trivia screen!  This feature of the app will consist of a way to practice your knowledge of DMV Questions.</Text>
        <Button 
            title="Start Trivia Questions now"
            onPress={() => navigation.navigate('')}
        />
        </View>
    )
}

export default TriviaScreen