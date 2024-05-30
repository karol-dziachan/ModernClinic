import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, StyleSheet } from "react-native";

const VisitPlace = ({ setAddress, setIsHomeVisit }) => {
    const [isHomeVisit, setIsHomeVisitFun] = useState(false);

    const handleSetIsHomeVisit = (val) => {
        setIsHomeVisitFun(val);
        setIsHomeVisit(val);
    }

    const handleToggle = () => {
        handleSetIsHomeVisit(!isHomeVisit);
        if (!isHomeVisit) {
            setAddress("");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Wizyta w placówce</Text>
                <Switch
                    value={isHomeVisit}
                    onValueChange={handleToggle}
                    thumbColor={isHomeVisit ? "#f9f9f9" : "#f4f3f4"}
                    trackColor={{ false: "#ccc", true: "#007bff" }}
                />
                <Text style={styles.switchLabel}>Wizyta domowa</Text>
            </View>
            {isHomeVisit ? (
                <View>
                    <Text style={styles.label}>Adres:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={"Ulica, numer domu, numer mieszkania..."}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <Text style={[styles.label, styles.attention]}>Wizyty domowe odbywają się tylko na terenie Łodzi.</Text>

                </View>
            ) : (
                <Text style={styles.info}>Wizytą odbędzię się w placówce:{"\n"}{"\n"}ul. Zmyślona 20/24,{"\n"}93-143 Łódź</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    attention: {
        textAlign: 'center',
        color: 'red'
    },
    info: {
        fontSize: 12
    },
    container: {
        marginTop: 20,
        paddingLeft: 20
    },
    label: {
        fontSize: 12,
        marginBottom: 5,
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    switchLabel: {
        fontSize: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});

export default VisitPlace;
