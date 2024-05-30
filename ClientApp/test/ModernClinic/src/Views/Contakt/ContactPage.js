import React from "react";
import { StyleSheet, View, Text , Dimensions, TouchableOpacity, Linking} from "react-native";
import Menu from "../../Components/MenuComponents/Menu/Menu";
import Header from "../../Components/Header/Header";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


const styles = StyleSheet.create({
    text: {
        fontFamily: "Roboto",
        fontSize: 15,
        marginBottom: 5
    },
    containerContact: {
        width: 0.8*screenWidth,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    itemContainer: {
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
        bar: {
        marginTop: 15, 
        width: 0.9*screenWidth
        ,
        height: 1, 
        backgroundColor: 'rgba(98, 98, 98, 0.4)',
        marginLeft: -0.05*screenWidth,
        // marginRight: "auto",
    },
    url: {
        color:'#17B5FF',
    }
})

export default function ContactPage({currentPage, setPage}){
    const handlePhoneCall = () => {
        Linking.openURL("tel:+ 48 012 345 678"); // Podaj właściwy numer telefonu
    };

    const handleEmail = () => {
        Linking.openURL("mailto:modern@clinic.pl"); // Podaj właściwy adres e-mail
    };


    return (
        <View >
            <Menu currentPage={currentPage} changePage={setPage} />
            <Header content = {"Kontakt"}/>
            <View style={styles.containerContact}>
                <View style={styles.itemContainer}>
                    <Text style={styles.text}>Dane firmy:</Text>
                    <Text style={styles.text}>Modern Clinic Sp. z o.o.</Text>
                    <Text style={styles.text}>ul. Zmyślona 20/24</Text>
                    <Text style={styles.text}>93-143 Łódź</Text>
                    <Text style={styles.text}>Polska</Text>
                </View>
                <View style={styles.bar}></View>
                <View style={styles.itemContainer}>
                    <Text style={styles.text}>NIP: 0123456789</Text>
                    <Text style={styles.text}>KRS: 0000000001</Text>
                    <Text style={styles.text}>REGON: 123456789</Text>
                </View>
                <View style={styles.bar}></View>
                <View style={styles.itemContainer}>
                    <Text style={styles.text}>Adres e-mail: <TouchableOpacity onPress={handleEmail} style={{display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginBottom: -10}}><Text style={styles.url}>modern@clinic.pl</Text></TouchableOpacity></Text>
                    <Text style={styles.text}>Telefon: <TouchableOpacity onPress={handlePhoneCall}><Text style={styles.url}>+ 48 012 345 678</Text></TouchableOpacity></Text>
                    <Text style={styles.text}>Dostępność recepcji telefonicznej od poniedziałku do soboty w godzinach 08:00 - 18:00</Text>
                </View>
            </View>

        </View>
    )
}