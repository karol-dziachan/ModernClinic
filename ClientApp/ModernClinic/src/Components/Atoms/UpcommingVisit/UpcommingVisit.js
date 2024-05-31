import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import CancelVisitDialog from "../../Dialogs/CancelVisitDialog/CancelVisitDialog";
import RateVisitDialog from "../../Dialogs/RateVisitDialag/RateVisitDialog";
import exportPhotos from "../../../../assets/doctors/exportPhotos";
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: 'rgb(237, 237, 237)',
        width: 0.94 * screenWidth,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 18,
        borderRadius: 8
    },
    photoContainer: {

    },
    detailsContainer: {

    },
    button: {
        backgroundColor: "#17B5FF",
        border: "1px solid white",
        borderRadius: 4,
        width: 250,
        padding: 15,
        margin: "0 auto",
        borderColor: 'white',
        borderWidth: 1,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    buttonText: {
        color: "white",
        textTransform: 'uppercase',
        fontSize: 22,
        letterSpacing: 2,
        textAlign: "center",
        fontFamily: "Roboto",
    },
    placeholderContainer: {
        backgroundColor: 'rgb(117, 199, 237)',
        borderRadius: 8,
        padding: 40,
        width: '45%',
        display: 'flex',
        justifyContent: "center",
        alignContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    detailsContainer: {
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 21
    },
    doctorText: {
        fontFamily: "Roboto",
        fontSize: 18,
        marginBottom: 5
    },
    specialityText: {
        fontFamily: "Roboto",
        fontSize: 15,
        marginBottom: 5,
        textTransform: 'uppercase',
        letterSpacing: 2
    },
    serviceDetails: {
        backgroundColor: 'rgb(234, 204, 196)',
        borderRadius: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 33,
        paddingBottom: 33,
        marginTop: 25
    },
    serviceTime: {
        fontFamily: "Roboto",
        fontSize: 12,
        marginBottom: 5
    },
    service: {
        fontFamily: "Roboto",
        fontSize: 12,
        marginBottom: 5
    },
    servicePlace: {
        fontFamily: "Roboto",
        fontSize: 7,
    },
    pastVisit: {
        opacity: .6
    },
    photo: {
        backgroundColor: 'rgb(117, 199, 237)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 10,
        borderRadius: 8,
    },
    emptyVisitText: {
        fontFamily: "Roboto",
        fontSize: 18,
        marginTop: 5,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    }
})

export default function UpcommingVisit({ upcommingVisitData }) {

    const [dialogVisible, setDialogVisible] = useState(false);
    const [isOpacity, setIsOpacity] = useState(false);
    const [rateDialogVisible, setRateDialogVisible] = useState(false);

    useEffect(() => {
        setDialogVisible(false);
        setRateDialogVisible(false);
    }, []);

    const openDialog = () => {
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };

    const openRateDialog = () => {
        setRateDialogVisible(true);
    };

    const closeRateDialog = () => {
        setRateDialogVisible(false);
    };


    return (
        <>
            {upcommingVisitData &&
                <View style={[styles.container, (upcommingVisitData.past || isOpacity) && styles.pastVisit]}>
                    <View style={styles.flex}>
                        <View style={[styles.placeholderContainer, upcommingVisitData.doctor.photo !== null && { padding: 0 }]}>
                            {upcommingVisitData.doctor.photo === null && <Icon name="user" size={70} color="white" />}
                            {upcommingVisitData.doctor.photo !== null && <Image source={exportPhotos[upcommingVisitData.doctor.photo]} style={styles.photo} />}
                        </View>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.doctorText}>{upcommingVisitData.doctor.name}</Text>
                            <Text style={styles.specialityText}>{upcommingVisitData.doctor.speciality}</Text>
                            <View style={styles.serviceDetails}>
                                <Text style={styles.serviceTime}>{upcommingVisitData.visit.date}, {upcommingVisitData.visit.time}</Text>
                                <Text style={styles.service}>{upcommingVisitData.visit.service}</Text>
                                <Text style={styles.servicePlace}>Miejsce: {upcommingVisitData.visit.place}</Text>
                            </View>
                        </View>
                    </View>
                    {
                        !upcommingVisitData.past &&
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={openDialog}>
                                <Text style={styles.buttonText}>
                                    Odwołaj wizytę
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                    {
                        upcommingVisitData.past &&
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={openRateDialog}>
                                <Text style={styles.buttonText}>
                                    Oceń wizytę
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }

                </View>}
            {
                !upcommingVisitData &&
                <Text style={styles.emptyVisitText}> Nie zapisałeś się jeszcze na żadną wizytę. </Text>
            }
            {upcommingVisitData && <CancelVisitDialog visitId={upcommingVisitData.visit.id} isVisible={dialogVisible} setModalVisible={closeDialog} setOpacity={setIsOpacity} />}
            {upcommingVisitData && <RateVisitDialog visitId={upcommingVisitData.visit.id} isVisible={rateDialogVisible} setModalVisible={closeRateDialog} />}
        </>
    )
}