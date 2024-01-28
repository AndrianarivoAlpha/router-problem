import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
	const [search, setSearch] = useState("");

	const handlePost = async () => {
		await axios
			.post(`http://192.168.88.14:6600/api/search`, search, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then(({ data }) => {
				AsyncStorage.setItem("user", JSON.stringify(data.user));
				router.push("/dashboard");
			})
			.catch((err) => console.log(err));
	};
	return (
		<View>
			<Text>App</Text>

			<TextInput
				value={search}
				onChangeText={(t) => setSearch(t)}
				onSubmitEditing={handlePost}
				style={{
					width: "100%",
					height: "20px",
					backgroundColor: "gray"
				}}
			/>
		</View>
	);
};

export default App;
