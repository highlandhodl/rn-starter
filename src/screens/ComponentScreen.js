import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const name = "Satoshi Nakamoto";
    return (
        <View>
            <Text style={styles.textStyle.fontSize}>Test</Text>
            <Text style={styles.textStyle.fontSize}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

export default ComponentScreen;
