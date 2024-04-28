import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import CancelVisitDialog from "../CancelVisitDialog/CancelVisitDialog";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const upcommingVisitData = {
    doctor: {
        name: "dr Anna Lewandowska",
        speciality: "kardiolog",
        photo: null 
    },
    visit: {
        id: 1,
        date: '30.06.2024',
        time: '10:30-11:00',
        service: 'Konsultacja kardiologiczna', 
        place: 'ModernClinic POMORSKA, ul. Pomorska 16/39'
    },

}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: 'rgb(237, 237, 237)',
        width: 0.94*screenWidth,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 18,
        borderRadius: 8
    },
    photoContainer:{

    },
    detailsContainer: {

    },
    button:{
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
  detailsContainer:{
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
  }
})

export default function UpcommingVisit(){

    const [dialogVisible, setDialogVisible] = useState(false);

        useEffect(() => {
        setDialogVisible(false); // Resetujemy stan dialogu przy każdej zmianie isVisible
    }, []);

    const openDialog = () => {
        console.log('dialogVisible ', dialogVisible)
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };


    return (
        <>
        <View style={styles.container}>
            <View style={styles.flex}>
                <View style={upcommingVisitData.doctor.photo !== null ? styles.photoContainer : styles.placeholderContainer}>
                    <Icon name="user-alt" size={70} color="white" />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style = {styles.doctorText}>{upcommingVisitData.doctor.name}</Text>
                    <Text style = {styles.specialityText}>{upcommingVisitData.doctor.speciality}</Text>
                   <View style={styles.serviceDetails}>
                        <Text style={styles.serviceTime}>{upcommingVisitData.visit.date}, {upcommingVisitData.visit.time}</Text>
                        <Text style={styles.service}>{upcommingVisitData.visit.service}</Text>
                        <Text style={styles.servicePlace}>Miejsce: {upcommingVisitData.visit.place}</Text>
                   </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={openDialog}>
                    <Text style={styles.buttonText}>
                        Odwołaj wizytę
                    </Text>
                </TouchableOpacity>
            </View>
        </View>  
             <CancelVisitDialog visitId={upcommingVisitData.visit.id} isVisible={dialogVisible} setModalVisible={closeDialog} />

        </>
    )
}