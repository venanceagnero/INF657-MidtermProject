import React from 'react';
import {StyleSheet, View } from "react-native";

export default function Card({ children }) {
    return ( <View style={styles.container}> {children} </View>)
}
const styles = StyleSheet.create({
    container:{
        borderRadius: 15,
        marginTop:15,
        overflow: "hidden",
        width: "80%",
        margin:"auto"
    }, 
});