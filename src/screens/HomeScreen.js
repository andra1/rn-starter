import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
	return (
		<View>
			<Text style={styles.text}>Hi I'm Kaushik</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate('Components') }
      />
      <Button 
        title="Go to List Demo"
        onPress = { () => props.navigation.navigate('List')}
      />

      <Button 
        title="Go to Image Screen Demo"
        onPress = { () => props.navigation.navigate('Image')}
      />

      <Button 
        title="Go to Counter Screen Demo"
        onPress = { () => props.navigation.navigate('Counter')}
      />

      <Button 
        title="Go to Color Screen Demo"
        onPress = { () => props.navigation.navigate('Color')}
      />

      <Button 
        title="Go to Square Screen Demo"
        onPress = { () => props.navigation.navigate('Square')}
      />

      <Button 
        title="Go to Text Input Demo"
        onPress = { () => props.navigation.navigate('Text')}
      />

      <Button 
        title="Go to Box Screen Demo"
        onPress = { () => props.navigation.navigate('Box')}
      />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;
