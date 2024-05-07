import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, Dimensions } from 'react-native';
import Header from '../../Header/Header';
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/FontAwesome';
import ApiClient from '../../../ApiClient/ApiClient';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const RateVisitDialog = ({ visitId, isVisible, setModalVisible }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [title, setTitle] = useState('');
    const apiClient = new ApiClient();

    const closeDialog = () => {
        setModalVisible(false);
    };

    const handleConfirm = async () => {
        let visit = await apiClient.get('/api/visits/'+visitId)
        console.log('wizyta - ', visit?.doctor?.id);
        let data = {
            title: title,
            description: comment, 
            comment: comment, 
            mark: rating, 
            doctorId: visit?.doctor?.id
        }
        await apiClient.post('/api/marks', data);
        console.log("Wysłano ocenę:");
        console.log("Ocena: ", rating);
        console.log("Tytuł: ", title);
        console.log("Komentarz: ", comment);

        closeDialog();
    };

    const handleRating = (value) => {
        setRating(value);
    };

    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => handleRating(i)}>
                    <Icon
                        name={i <= rating ? 'star' : 'star-o'}
                        size={23}
                        color={i <= rating ? '#FFD700' : '#D3D3D3'}
                        style={styles.star}
                    />
                </TouchableOpacity>
            );
        }
        return stars;
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={closeDialog}
        >
            <BlurView 
                style={styles.centeredView}
                tint="light"
                intensity={50}
            >
                <View style={styles.modalView}>
                    <Header content={"Oceń wizytę"} style={styles.minusMarginTop} />
                    <View style={styles.ratingContainer}>
                        {renderStars()}
                    </View>
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
                            placeholder="Komentarz..."
                            value={comment}
                            onChangeText={(text) => setComment(text)}
                            multiline={true}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cancelButton} onPress={closeDialog}>
                            <Text style={styles.buttonText}>Anuluj</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                            <Text style={styles.buttonText}>Potwierdź</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
};

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
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#EDEDED',
        width: 0.9*screenWidth,
        paddingTop: 0,
        paddingBottom: 35
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

export default RateVisitDialog;
