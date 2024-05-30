import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Opinion from '../../Atoms/Opinion/Opinion';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const MarksDialog = ({ opinions, doctorName, isVisible, setModalVisible }) => {

    const closeDialog = () => {
        setModalVisible(false);
    };

    const handleCancel = () => {
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
                    <ScrollView styles={styles.scroll}>
                        <Text style={styles.modalText}>Opinie o {doctorName}</Text>
                        <View style={styles.opinionsContainer}>
                            {opinions.map((item) =>
                                <Opinion mark={item.mark} title={item.title} comment={item.comment} />
                            )}
                        </View>
                        <TouchableOpacity style={styles.confirmButton} onPress={handleCancel}>
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </ScrollView>
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
    scroll: {
        padding: 35
    },
    modalView: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 0.8 * screenWidth

    },
    modalText: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
    },
    confirmButton: {
        backgroundColor: "#17B5FF",
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
});

export default MarksDialog;
