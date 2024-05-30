import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import ApiClient from '../../../ApiClient/ApiClient';

const CancelVisitDialog = ({ visitId, isVisible, setModalVisible, setOpacity }) => {
    const apiClient = new ApiClient()

    const closeDialog = () => {
        setModalVisible(false);
    };

    const handleCancel = async () => {
        console.info('CancelVisitDialog - call - ', `/api/visits/${visitId}`)
        await apiClient.delete(`/api/visits/${visitId}`);
        setOpacity(true);
        closeDialog();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={closeDialog}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Czy na pewno chcesz odwołać wizytę?</Text>
                    <TouchableOpacity style={styles.cancelButton} onPress={closeDialog}>
                        <Text style={styles.buttonText}>Anuluj</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.confirmButton} onPress={handleCancel}>
                        <Text style={styles.buttonText}>Potwierdź</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    cancelButton: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    confirmButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
});

export default CancelVisitDialog;
