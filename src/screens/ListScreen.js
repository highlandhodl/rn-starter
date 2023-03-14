import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: 20 },
        { name: "Friend #2", age: 45 },
        { name: "Friend #3", age: 32 }
    ];
    
    return (
        <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
            // element === { item: { name: 'Friend #1' }, index: 0 }
            // item === { name: 'Friend #1' }
            return (
            <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
            </Text>
            );
        }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: { fontSize: 50 }
})

export default ListScreen;