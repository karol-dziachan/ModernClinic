import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    header: {
        fontFamily: "Roboto",
        fontSize: 22, 
        textAlign: 'center',
        color: 'black',
        marginBottom: 20
    },
    menuItemText: {
        fontFamily: "Roboto",
        fontSize: 16, 
        textAlign: 'center',
        color: '#807C7C'
    },
    menuItem: {
        marginBottom: 15
    }
})


export default function UseFulLinks({setPage}){
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Przydatne linki</Text>
            <TouchableOpacity style={styles.menuItem} onPress={() => setPage('RulesPage')}><Text style={styles.menuItemText}>Regulamin</Text></TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => setPage('PrivacyPolicyPage')}><Text style={styles.menuItemText}>Polityka prywatności</Text></TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => setPage('ComplaintsPage')}><Text style={styles.menuItemText}>Reklamacje</Text></TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => setPage('FAQPage')}><Text style={styles.menuItemText}>FAQ</Text></TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => setPage('ContactPage')}><Text style={styles.menuItemText}>Kontakt</Text></TouchableOpacity>
        </View>
    )
}