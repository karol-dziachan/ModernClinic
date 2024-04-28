import React from "react";
import { StyleSheet, View } from "react-native";
import Menu from "../../Components/Menu/Menu";

const styles = StyleSheet.create({
    test: {
        width: 10, 
        height: 10,
        backgroundColor: 'red'
    }
})

export default function ContactPage({currentPage, setPage}){
    return (
        <View>
            <Menu currentPage={currentPage} changePage={setPage} />
            <View style={styles.test}></View>
        </View>
    )
}