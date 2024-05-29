import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ExpertPerson from "../../Atoms/ExpertPerson/ExpertPerson";
import ApiClient from "../../../ApiClient/ApiClient";
import Loader from "../../Atoms/Loader/Loader";

export default function Persons({setPage}){
    const [services, setServices] = useState([]);
    const [specialists, setSpecialists] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiClient = new ApiClient()

    useEffect(async () => {
            try {
                const serviceData = await apiClient.get('/api/services'); 
                const doctors = await apiClient.get('/api/doctors/get-specialists'); 
                setServices(serviceData);
                setSpecialists(doctors);
                setLoading(false);

                console.log('doctors  - ', doctors.persons)
            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error);
        }   

    }, []);

    return (
        !loading ? specialists.persons.map((item) =>
        <ExpertPerson setPage={setPage} person={item} services={services.filter((ser) => item.services.includes(ser.id))}/>
        ) : <Loader />
    )
}