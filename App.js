import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isHidden: true, word: 'Pokaż'},
            this.onPress = this.onPress.bind(this);
    }

    onPress = () => {
        this.setState({
            isHidden: !this.state.isHidden,
            word : this.state.word ='Ukryj'
        });

    };

    render() {

        const {word} = this.state.word;

        return (
            <View style={styles.container}>
            <View style={styles.countContainer}>
            </View>
            <Text style = {styles.exercise}>Zadanie 2</Text>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style = {styles.button} >{this.state.word}</Text>
            </TouchableOpacity>
        {
            this.state.isHidden ? <View/>:
        <View>
        <Text style = {styles.words}>Nazywam się</Text>
        <Text style={styles.wordsSecond}>Kinga Derendal</Text>
        </View>
        }

    </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    exercise: {
        alignItems: "center",
        fontSize: 23,
        paddingLeft: 145,
        paddingBottom: 20

    },
    words:{
        alignItems:"center",
        color: "lightslategray",
        paddingLeft: 125,
        paddingTop: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    wordsSecond:{
        alignItems:"center",
        color: "lightslategray",
        paddingLeft: 125,
        paddingTop: 15,
        fontSize: 20,

    },
    button: {
        alignItems: "center",
        backgroundColor: "#293e6c",
        color: "#FFFFFF",
        padding: 10,
        fontSize: 20
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});

export default App;



