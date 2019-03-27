import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import Dialog, { DialogContent } from "react-native-popup-dialog";

const { height, width } = Dimensions.get("window");

const rootReducer = (state = {}, action) => state;

const store = createStore(rootReducer);

class ConnectedSubComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Text>Hello from connected subcomponent</Text>
			</View>
		);
	}
}

const mapStateToPropsSub = state => ({});
const ConnectedWithStoreSub = connect(mapStateToPropsSub)(
	ConnectedSubComponent
);

const ConnectedComponent = props => (
	<View>
		<Text>I'm a connected component</Text>
		<Dialog
			width={width}
			height={height - 26}
			dialogStyle={{
				position: "absolute",
				top: 0
			}}
			visible={true}
		>
			<DialogContent style={{ height, width }}>
				<ConnectedWithStoreSub />
			</DialogContent>
		</Dialog>
	</View>
);

const mapStateToProps = state => ({});
const ConnectedWithStore = connect(mapStateToProps)(ConnectedComponent);

const Hello = () => (
	<View>
		<Text>Hi</Text>
		<ConnectedWithStore />
	</View>
);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<Hello />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
});
