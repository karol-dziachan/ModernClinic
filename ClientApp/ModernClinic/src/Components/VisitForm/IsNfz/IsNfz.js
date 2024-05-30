import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, StyleSheet } from "react-native";

export default function IsNfz({ setRefferalNumber, setIsNfz }) {
    const [isNfz, setIsNfzFun] = useState(false);

    const handleSetIsNfz = (val) => {
        setIsNfzFun(val);
        setIsNfz(val);
    }

    const handleToggle = () => {
        handleSetIsNfz(!isNfz);
        if (!isNfz) {
            setRefferalNumber("");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Wizyta prywatna</Text>
                <Switch
                    value={isNfz}
                    onValueChange={handleToggle}
                    thumbColor={isNfz ? "#f9f9f9" : "#f4f3f4"}
                    trackColor={{ false: "#ccc", true: "#007bff" }}
                />
                <Text style={styles.switchLabel}>Wizyta na NFZ</Text>
            </View>
            {isNfz ? (
                <View>
                    <Text style={styles.label}>Numer skierowania:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setRefferalNumber(text)}
                    />

                </View>
            ) : (
                <></>
            )}
        </View>
    );
}

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
