import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Lists')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Component')}>
        <Text>Go to Component Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Image')}>
        <Text>Go to Image Demo</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
