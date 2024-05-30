import React, { useState } from "react";

import { Text, ScrollView, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Menu from "../../Components/MenuComponents/Menu/Menu";
import Header from "../../Components/Header/Header";
import Accordion from "../../Components/Atoms/Accordion/Accordion";


const tabData = [
    {
        Header: '1.	Jak złożyć reklamację?',
        Content: <Text>Jeśli masz jakiekolwiek zastrzeżenia dotyczące korzystania z aplikacji mobilnej lub świadczonych usług Modern Clinic, możesz złożyć reklamację poprzez formularz dostępny w aplikacji – znajdziesz go na końcu sekcji „Reklamacje” lub skontaktować się z naszym działem obsługi klienta.</Text>
    },
    {
        Header: '2.	Co powinna zawierać reklamacja?',
        Content: <Text>W treści reklamacji prosimy o dokładne opisanie problemu oraz podanie wszystkich istotnych kwestii, takich jak data oraz godzina, rodzaj usługi, specjalistę, a także dodatkowe informacje, które mogą pomóc nam w rozpatrzeniu reklamacji jak najszybciej.</Text>
    },
    {
        Header: '3.	Jak długo trwa proces rozpatrywania reklamacji?',
        Content: <Text>Staramy się rozpatrywać reklamacje możliwie jak najszybciej. Nie udzielamy odpowiedzi w terminie nie dłuższym niż 14 dni roboczych.</Text>
    },
    {
        Header: '4.	Co robić w przypadku niezadowolenia z odpowiedzi na reklamację?',
        Content: <Text>Jeśli nie jesteś zadowolony z udzielonej odpowiedzi na swoją reklamację, masz prawo do złożenia ponownej reklamacji dotyczącej wyniku rozpatrzenia poprzedniej reklamacji. W takim przypadku skontaktuj się ponownie z naszym działem obsługi klienta, a my ponownie przeanalizujemy Twoją sprawę.</Text>
    },
    {
        Header: '5.	Co się dzieje w przypadku braku realizacji Twojej reklamacji?',
        Content: <Text>Jeśli Twoja reklamacja nie zostanie zrealizowana zgodnie z Twoimi oczekiwaniami, posiadasz prawo do skorzystania z innych dostępnych środków ochrony prawnej, takich jak składanie skargi do właściwego organu nadzorczego.</Text>
    },
]

export default function ComplaintsPage({ currentPage, setPage }) {
    const [comment, setComment] = useState('');
    const [title, setTitle] = useState('');

    const handleConfirm = () => {
        console.info("Complaints sending...")
    }
    return (<ScrollView>
        <Menu currentPage={currentPage} changePage={setPage} />
        <Header content="Reklamacje" />
        <Accordion tabData={tabData} style={{ marginBottom: 30 }} />
        <View>
            <View style={[styles.inputContainer, styles.marginTop, styles.shadow]}>
                <TextInput
                    style={styles.input}
                    placeholder="Tytuł..."
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
            </View>
            <View style={[styles.inputContainer, styles.textAreaContainer, styles.shadow]}>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Treść reklamacji..."
                    value={comment}
                    onChangeText={(text) => setComment(text)}
                    multiline={true}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.buttonText}>Potwierdź</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    confirmButton: {
        backgroundColor: '#17B5FF',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    marginTop: {
        marginTop: 15
    },
    minusMarginTop: {
        marginTop: -15
    },
    cancelButton: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    confirmButton: {
        backgroundColor: '#17B5FF',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        marginLeft: "auto",
        marginRight: "auto",
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'transparent'
    },
    input: {
        height: 40,
        borderColor: 'rgba(137, 137, 137, .6)',
        borderWidth: 1,
        borderRadius: 4,
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: 'transparent'
    },
    textAreaContainer: {
        height: 200,
    },
    textArea: {
        height: '100%',
        textAlignVertical: 'top',
        paddingTop: 10,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 20
    },
    star: {
        marginRight: 5
    }
});