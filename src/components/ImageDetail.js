import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = props => {
    return (
        <View>
            <Image style={styles.imageSize} source={props.imageSource}/>
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    fontSize: {
        fontSize: 45
    },
    imageSize: {
        width: 66,
        height: 58,
      }
});

export default ImageDetail;