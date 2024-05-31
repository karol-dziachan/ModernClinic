import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Accordion from "../../Atoms/Accordion/Accordion";
import OffersForm from "../OffersForm/OffersForm";
import VisitDateTimePicker from "../../VisitForm/VisitDateTimePicker/VisitDateTimePicker";
import SpecialistsForm from "../../VisitForm/SpecialistsForm/SpecialistsForm";
import VisitPlace from "../../VisitForm/VisitPlace/VisitPlace";
import IsNfz from "../../VisitForm/IsNfz/IsNfz";
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
import ApiClient from "../../../ApiClient/ApiClient";
import DefaultAddress from "../../../Globals/DefaultAddress";

export default function BookVisit() {

    const [service, setService] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [specialist, setSpecialist] = useState(null);
    const [address, setAddress] = useState(null);
    const [isHomeVisit, setIsHomeVisit] = useState(true);
    const [referralNumber, setRefferalNumber] = useState(null);
    const [isNfz, setIsNfz] = useState(true);
    const [validation, setValidation] = useState([]);
    const [isSend, setIsSend] = useState(false);
    const apiClient = new ApiClient();

    useEffect(() => {
        if (service !== null && service !== undefined) {
            console.info('Service changed:', service);
            setTabData(prevTabData => {
                const text = service ? `Wybrano usługę: ${service.name} ` : 'Usługa ' + isNfz ? 'Wizyta na NFZ.' : 'Wizyta prywatna'
                const updatedTabData = [...prevTabData];
                updatedTabData[0].Header = text;
                return updatedTabData;
            });
        }
        if (date !== null && date !== undefined && time !== null && time !== undefined) {
            console.info('time changed:', date, time);
            setTabData(prevTabData => {
                const updatedTabData = [...prevTabData];
                updatedTabData[2].Header = date && time ? `Wybrano date: ${date.toLocaleDateString('en-GB')}  w przedziale ${time.time}` : 'Data i czas wizyty';
                return updatedTabData;
            });
        }
        if (specialist !== null && specialist !== undefined) {
            console.info('Specialist changed:', specialist);
            setTabData(prevTabData => {
                const updatedTabData = [...prevTabData];
                updatedTabData[1].Header = specialist ? `Wybrano specjaliste: ${specialist.name}` : 'Specjalista';
                return updatedTabData;
            });
        }
        setTabData(prevTabData => {
            const updatedTabData = [...prevTabData];
            updatedTabData[3].Header = isHomeVisit ? `Wizyta w domu ` : `Wizyta w placówce`;
            return updatedTabData;
        });
        // setTabData(prevTabData => {
        //     const updatedTabData = [...prevTabData];
        //     updatedTabData[4].Header = isNfz ? `Wizyta na NFZ` : `Wizyta prywatna`;
        //     return updatedTabData;
        // });


        if (service !== null && service !== undefined) {
            removeTabAtIndex(1);

            addTabAtIndex(1, {
                Header: specialist ? `Wybrano specjaliste: ${specialist.name}` : 'Specjalista',
                Content: <SpecialistsForm setSpecialist={setSpecialist} offerId={service?.id} />
            });
        }

        if (specialist !== null && service !== specialist) {
            removeTabAtIndex(2);

            addTabAtIndex(2, {
                Header: date && time ? `Wybrano date: ${date.toLocaleDateString('en-GB')}  w przedziale ${time.time}` : 'Data i czas wizyty',
                Content: <VisitDateTimePicker setDate={setDate} setTime={setTime} doctorId={specialist?.id} />
            });
        }

    }, [service, date, time, specialist, isHomeVisit, isNfz]);

    const addTabAtIndex = (index, newTab) => {
        setTabData(prevTabData => {
            const updatedTabData = [...prevTabData];
            updatedTabData.splice(index, 0, newTab);
            return updatedTabData.map((tab, idx) => ({
                ...tab,
                Header: tab.Header,
                Content: tab.Content,
                key: idx.toString() // ensure each tab has a unique key
            }));
        });
    };

    const removeTabAtIndex = (indexToRemove) => {
        setTabData(prevTabData => {
            const updatedTabData = [...prevTabData];
            updatedTabData.splice(indexToRemove, 1);
            return updatedTabData.map((tab, idx) => ({
                ...tab,
                Header: tab.Header,
                Content: tab.Content,
                key: idx.toString() // ensure each tab has a unique key
            }));
        });
    };
    const [tabData, setTabData] = useState([
        {
            Header: 'Usługa',
            Content: <OffersForm setService={setService} setIsNfz={setIsNfz} setRefferalNumber={setRefferalNumber} style={{ paddingLeft: 10, paddingRight: 10 }} />
        },
        {
            Header: 'Specjalista',
            Content: <SpecialistsForm setSpecialist={setSpecialist} offerId={service?.id} />
        },
        {
            Header: 'Data i czas wizyty',
            Content: <VisitDateTimePicker setDate={setDate} setTime={setTime} doctorId={specialist?.id} />
        },
        {
            Header: 'Miejsce wizyty',
            Content: <VisitPlace setAddress={setAddress} setIsHomeVisit={setIsHomeVisit} />
        },
        // {
        //     Header: 'Finansowanie wizyty',
        //     Content: <IsNfz setRefferalNumber={setRefferalNumber} setIsNfz={setIsNfz} />
        // },
    ]);

    const sendForm = async () => {
        const newErrors = [];

        console.info('walidacja')
        if (!service) {
            newErrors.push('Nie wybrano usługi.');
        }

        if (!time) {
            newErrors.push('Nie wybrano daty.');
        }

        if (!specialist) {
            newErrors.push('Nie wybrano specjalisty.');
        }

        if (isNfz && !referralNumber) {
            newErrors.push('Jeśli wybrano sposób finansowania przez narodowy fundusz zdrowia to należy wprowadzić numer skierowania.');
        }

        if (isHomeVisit && !address) {
            newErrors.push('Jeśli wybrano wizytę domową to należy wprowadzić adres.');
        }

        if (newErrors.length > 0) {
            setValidation(newErrors);
        } else {
            const data = {
                doctorId: specialist.id,
                timeTableId: time.id,
                serviceId: service.id,
                refferalNumber: referralNumber,
                nfz: isNfz,
                home: isHomeVisit,
                place: !address || address === undefined ? DefaultAddress : address,
            }

            try {

                await apiClient.post('/api/visits/book-visit', data);
                console.info('Visit booked')
                setValidation([]);
                setIsSend(true);
            } catch (error) {
                newErrors.push("Ten termin jest już zajęty")
                setValidation(newErrors);
            }

        }
    }

    return (
        <View style={{}}>
            <Accordion tabData={tabData} style={{ marginBottom: 30 }} />
            {validation.map((error, index) => (
                <View style={styles.errorContainer}>
                    <Text key={index} style={styles.errorText}>{error}</Text>
                </View>

            ))}

            {isSend ? <View style={styles.sendContainer}>
                <Text style={styles.errorText}>Umówiono wizytę</Text>
            </View> : <></>}
            <TouchableOpacity style={styles.button} onPress={() => sendForm()}>
                <Text style={styles.buttonText}>Prześlij</Text>
            </TouchableOpacity>


        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#17B5FF",
        border: "1px solid white",
        borderRadius: 4,
        width: 150,
        padding: 15,
        margin: "0 auto",
        borderColor: 'white',
        borderWidth: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15
    },
    buttonText: {
        color: "white",
        textTransform: 'uppercase',
        fontSize: 14,
        letterSpacing: 2,
        textAlign: "center",
        fontFamily: "Roboto",
    },
    errorContainer: {
        marginTop: 5,
        backgroundColor: 'red',
        marginBottom: 5,
        padding: 10,
        borderRadius: 8,
        width: 0.9 * screenWidth,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    sendContainer: {
        marginTop: 5,
        backgroundColor: 'green',
        marginBottom: 5,
        padding: 10,
        borderRadius: 8,
        width: 0.9 * screenWidth,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    errorText: {
        color: "white",
    },
})
