import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score='7' />
            <ImageDetail title="Kobe Bryant" imageSource={require('../../assets/kobe_bryant.jpg')} score='8'/>
            <ImageDetail title="Elon Musk" imageSource={require('../../assets/elon_musk.jpg')} score='9'/>
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

export default ImageScreen;