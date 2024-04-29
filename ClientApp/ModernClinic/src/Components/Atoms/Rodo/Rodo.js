import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text:{
        color: 'rgba(0, 0,0, .87)',
        textAlign: 'center', 
        fontSize: 8,
        position: 'relative',
        bottom: 0,
        paddingLeft: 10, 
        paddingRight: 10, 
        

    }
})

export default function Rodo(){
    return (
        <Text style={styles.text}>
            ModernClinic sp. z o.o. z siedzibą w Warszawie przy ul. Wapiennej 22/30, 00-739 Warszawa, zarejestrowana w Rejestrze Przedsiębiorców Krajowego Rejestru Sądowego przez Sąd Rejonowy dla m.st. Warszawy w Warszawie, XIII Wydział Gospodarczy KRD, pod nr KRS 0000012312, NIP: 521-222-03-19, REGON: 009216320, kapitał zakładowy: 1 002 000 zł., posiadająca status dużego przedsiębiorcy w rozumieniu art. 4 pkt 6 ustawy z dnia 8 marca 2013 r. o przeciwdziałaniu nadmiernym opóźnieniom w traksakcjach handlowych.
        </Text>
    )
}