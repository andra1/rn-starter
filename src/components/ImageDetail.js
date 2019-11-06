import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imageSource} style={styles.image}/>
            <Text>
                Title is {props.title} and has image score of {props.score}
            </Text>
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
    image:{
        width: null,
        resizeMode: 'contain',
        height: 220,
    } 
});

export default ImageDetail;