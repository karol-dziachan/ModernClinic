import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    test: {
        width: 10, 
        height: 10,
        backgroundColor: 'red'
    }
})

export default function ContactPage(){
    return (
        <View>
            <View style={styles.test}></View>
        </View>
    )
}