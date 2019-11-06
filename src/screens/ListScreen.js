import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
	const friends = [
		{ name: "Vinaya", Age: 27 },
		{ name: "Viraj", Age: 27 },
		{ name: "Zach", Age: 28 },
		{ name: "Paco", Age: 29 }
	];
	return (
		<FlatList
			vertical
			showsHorizontalScrollIndicator={false}
			keyExtractor={friend => friend.name}
			data={friends}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - {item.Age}{" "}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50,
		fontSize: 25,
		color: "blue",
		marginHorizontal: 100
	},
	nameStyle: {
		fontSize: 20
	}
});

export default ListScreen;
