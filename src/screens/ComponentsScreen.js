 import React from 'react';
 import {Text, StyleSheet, View} from 'react-native';

 const ComponentsScreen = () => {
     const greeting = 'Hi there';
     const started = 'Getting started with react native';
     const name = 'Kaushik';
     return (
            <View>
                <Text style={styles.textStyle}>{started}</Text>
                <Text style={styles.nameStyle}>My name is {name}</Text>
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
     }


 });

 export default ComponentsScreen