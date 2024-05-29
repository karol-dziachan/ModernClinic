import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Header from "../../Header/Header";
import UpcommingVisit from "../../Atoms/UpcommingVisit/UpcommingVisit";
import ApiClient from "../../../ApiClient/ApiClient";
import Loader from "../../Atoms/Loader/Loader";

export default function UpcommingVisitComponent({ setPage }) {
    const [upcommingVisitData, setUpcommingVisitData] = useState({});
    const [loading, setLoading] = useState(true);
    const apiClient = new ApiClient();

        useEffect(() => {
            async function fetchApi(){
                try {
                    const visitData = await apiClient.get('/api/visits/get-nearest-visit'); 
                    setUpcommingVisitData(visitData);
                    setLoading(false);
                } catch (error) {
                    console.error('Błąd podczas pobierania danych wizyty:', error);
                    console.error('Nazwa błędu:', error.name);
                    console.error(error.config)

                    // Wyprintowanie dodatkowych właściwości błędu, jeśli istnieją
                    for (const [key, value] of Object.entries(error)) {
                        console.error(`${key}: ${value}`);
                    }
                }   
            }
            
            fetchApi();
    }, []);

    return (
        <>
            <Header content={"Nadchodzące wizyty"} setPage={setPage} page={'UpcommingVisitPage'} />
            {  !loading ? <UpcommingVisit upcommingVisitData={upcommingVisitData} /> 
            :<Loader />}
        </>
    );
}
