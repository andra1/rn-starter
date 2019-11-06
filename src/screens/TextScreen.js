import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { NavigationEvents } from 'react-navigation';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Please enter your password! </Text>
            <TextInput
                autoCapitalize= "none"
                autoCorrect={false}
                style={styles.input}
                value= {password}
                onChangeText={(newValue) => {
                    setPassword(newValue)
                }}
            />
            <Text> My password is {password} </Text>
            { password.length <= 5 ? <Text> Password must be longer than 5 characters </Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        color: 'red'
    },
    nameStyle: {
        fontSize: 20
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;