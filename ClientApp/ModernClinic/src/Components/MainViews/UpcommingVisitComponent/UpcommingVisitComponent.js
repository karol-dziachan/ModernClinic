import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Header from "../../Header/Header";
import UpcommingVisit from "../../Atoms/UpcommingVisit/UpcommingVisit";
import ApiClient from "../../../ApiClient/ApiClient";

export default function UpcommingVisitComponent({ setPage }) {
    const [upcommingVisitData, setUpcommingVisitData] = useState({});
    const [loading, setLoading] = useState(true);
    const apiClient = new ApiClient();

        useEffect(async () => {
            try {
                const visitData = await apiClient.get('/api/visits/get-nearest-visit'); 
                setUpcommingVisitData(visitData);
                setLoading(false);

                console.log('doctors  - ', doctors.persons)
            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error);
        }   

    }, []);

    return (
        <>
            <Header content={"Nadchodzące wizyty"} setPage={setPage} page={'UpcommingVisitPage'} />
            {  !loading ? <UpcommingVisit upcommingVisitData={upcommingVisitData} /> 
            : <View><Text>Ładowanie</Text></View>}
        </>
    );
}
