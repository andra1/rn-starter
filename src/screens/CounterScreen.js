import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';


const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
           <View>
               <Button 
                    title="Increase counter" 
                    onPress= {() => {
                        setCounter(counter + 1);
                }}
                />
                <Button 
                    title="Decrease counter" 
                    onPress= {() => {
                        setCounter(counter - 1);
                }}
                />
               <Text style={styles.nameStyle}>
                    Current Count: {counter}
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
    }


});

export default CounterScreen