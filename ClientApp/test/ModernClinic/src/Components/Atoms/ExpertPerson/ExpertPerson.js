import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MarksDialog from "../../Dialogs/MarksDialog/MarksDialog";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

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
        flex: 1,
    },
    button:{
        backgroundColor: "#17B5FF",
        border: "1px solid white",
        borderRadius: 4,
        width: 150,
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
    fontSize: 14,
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
    marginRight: 10, 
    flex: 2
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
  doctorDetails: {
    backgroundColor: 'rgb(234, 204, 196)',
    borderRadius: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 33,
    paddingBottom: 33,
    marginTop: 25
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  detailsHeader: {
    color: 'rgba(0, 0, 0, .87)',
    fontSize: 14,
    fontFamily: "Roboto",
    textAlign: 'center'
  },
  opinionsLength: {
    color: 'rgba(0, 0, 0, .87)',
    fontSize: 9,
    fontFamily: "Roboto",
    textAlign: 'center'
  },
      ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 8,
    },
    star: {
        marginRight: 5,

    }
})

export default function ExpertPerson({person, services, setPage}){
        const [dialogVisible, setDialogVisible] = useState(false);

                useEffect(() => {
        setDialogVisible(false); 
    }, []);

    const openDialog = () => {
        console.log('dialogVisible ', dialogVisible)
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };

        const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            var rating = person.rateAvg;
            stars.push(
                <View key={i}>
                    <Icon
                       name={'star'}
                        size={25}
                        color={i <= rating ? '#FDD835' : '#BDBDBD'}
                        style={styles.star}
                    />
                </View>
            );
        }
        return stars;
    };

    return (
        <>
        <View style={[styles.container]}>
            <View style={styles.flex}>
                <View style={person.photo !== null ? styles.photoContainer : styles.placeholderContainer}>
                    <Icon name="user" size={70} color="white" />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style = {styles.doctorText}>{person.name}</Text>
                    <Text style = {styles.specialityText}>{person.speciality}</Text>
                   <View style={styles.doctorDetails}>
                        <Text style={styles.detailsHeader}>Średnia ocen</Text>
                         <View style={styles.ratingContainer}>
                            {renderStars()}
                        </View>
                        <Text style={styles.opinionsLength}>{person.opinions.length} opinii</Text>
                   </View>
                </View>
            </View>
      
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => setPage("BookVisitPage")}>
                        <Text style={styles.buttonText}>
                            Umów wizytę
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={openDialog}>
                        <Text style={styles.buttonText}>
                            Opinie
                        </Text>
                    </TouchableOpacity>
                </View>
        </View> 
        <MarksDialog doctorName={person.name} opinions={person.opinions} isVisible={dialogVisible} setModalVisible={closeDialog} /> 
        </>
    )
}