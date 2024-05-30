import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        color: 'rgba(0, 0,0, .87)',
        textAlign: 'center',
        fontSize: 8,
        position: 'relative',
        bottom: 0,
        paddingLeft: 10,
        paddingRight: 10,


    }
})

export default function Rodo() {
    return (
        <Text style={styles.text}>
            Modern Clinic sp. z o.o. z siedzibą w Warszawie przy ul. Zmyślonej 20/24, 93-143 Łódź, zarejestrowana w Rejestrze Przedsiębiorców Krajowego Rejestru Sądowego przez Sąd Rejonowy dla m.st. Warszawy w Warszawie, XIII Wydział Gospodarczy KRD, pod nr KRS 0000000001, NIP: 012-345-678-9, REGON: 123456789, kapitał zakładowy: 1 002 000 zł., posiadająca status dużego przedsiębiorcy w rozumieniu art. 4 pkt 6 ustawy z dnia 8 marca 2013 r. o przeciwdziałaniu nadmiernym opóźnieniom w traksakcjach handlowych.
        </Text>
    )
}