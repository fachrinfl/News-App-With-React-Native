import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { robotoWeights } from 'react-native-typography'

const listItem = props => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={[styles.listItem, props.itemStyle]}>
            <Image
                resizeMode="cover"
                source={props.itemImage}
                style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>{props.itemTitle}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        backgroundColor: "#FFFFFF",
        flexDirection: "column"
    },
    itemImage: {
        height: 150,
        width: "100%",
        marginTop: 15
    },
    itemTitle: {
        ...robotoWeights.medium,
        fontSize: 16,
        color: "#000000",
        margin: 10,
    },
    likeButton: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 10
    }
});

export default listItem;