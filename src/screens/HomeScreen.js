import React from 'react';
import {View, Text, Button} from 'react-native';
import Navbar from '../components/Navbar'

const HomeScreen = ({navigation}) => {
    return(
        <View>
            <Navbar/>
            <Text style={{color: '#00b300'}}>Welcome to the Next Street Mobile App.  This app will assist you with getting your permit and your license.</Text>
            <Button 
                title="Go to Trivia Screen"
                onPress={() => navigation.navigate('Trivia')}
            />
        </View>
    )
}

export default HomeScreen