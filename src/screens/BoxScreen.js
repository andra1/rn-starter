import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { NavigationEvents } from 'react-navigation';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> Child 1 </Text>
            <Text style={styles.textStyle}> Child 2 </Text>
            <Text style={styles.textStyle}> Child 3 </Text>
            <Text style={styles.textStyle}> Child 4 </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'red',
        borderWidth: 2,
        borderColor: 'orange'
    },
    nameStyle: {
        fontSize: 20
    },
    input: {
        margin: 15,
        borderColor: 'black',¡
        borderWidth: 1
    },
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center'

    }
});

export default BoxScreen;