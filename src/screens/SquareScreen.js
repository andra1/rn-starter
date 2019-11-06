import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
            ? state
            : {...state, red: state.red + action.amount};
        case 'blue':
                return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : {...state, blue: state.blue + action.amount};
        case 'green':
                return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : {...state, green: state.green + action.amount};
        default:
            return state;
    };
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
    const {red, green, blue} = state;

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red+change);
            case 'green':
                if ((green+change > 255) || (green + change < 0)) {
                    return;
                } else {
                    setGreen(green+change);
                }
                return;
            case 'blue':
                if ((blue+change > 255) || (blue + change < 0)) {
                    return;
                } else {
                    setBlue(blue+change);
                }
                return;
            default:
                return;
        }
    };

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({colorToChange:'red', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange:'red', amount: -1*COLOR_INCREMENT})}
                color="Red" 
            />
            <ColorCounter 
                onIncrease={() => dispatch({colorToChange:'blue', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange:'blue', amount: -1*COLOR_INCREMENT})}
                color="Blue" 
            />
            <ColorCounter
                onIncrease={() => dispatch({colorToChange:'green', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange:'green', amount: -1*COLOR_INCREMENT})}
                color="Green" 
            />
            <View style={{ height: 200, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
            <Text> Current value of rgb is ({red}, {green}, {blue}) </Text>
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

export default SquareScreen;