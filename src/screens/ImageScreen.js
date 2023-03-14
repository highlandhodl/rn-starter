import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="forest" imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail title="beach" imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetail title="bitcoin" imageSource={require('../../assets/bitcoin.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

export default ImageScreen;
