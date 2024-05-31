import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import UpcommingVisit from "../../Atoms/UpcommingVisit/UpcommingVisit";
import { StyleSheet } from "react-native";
import ApiClient from "../../../ApiClient/ApiClient";
import { View, Text } from "react-native";
import Loader from "../../Atoms/Loader/Loader";

const styles = StyleSheet.create({
    marginBottom: {
        marginBottom: 20
    }
})

export default function Visits() {
    const [upcommingVisitData, setUpcommingVisitData] = useState({});
    const [loading, setLoading] = useState(true);
    const apiClient = new ApiClient();
    useEffect(async () => {
        try {
            const upcommingVisitData = await apiClient.get('/api/visits/get-all-visits');
            setUpcommingVisitData(upcommingVisitData);
            setLoading(false);
        } catch (error) {
            console.error('Error during fetching data (Visits):', error);
        }

    }, []);

    return (
        !loading ? <>
            <Header content={"Nadchodzące wizyty"} />
            {
                upcommingVisitData.visits.filter(item => !item.past).map((item) =>
                    <UpcommingVisit style={styles.marginBottom} upcommingVisitData={item} />
                )
            }
            <Header content={"Odbyte wizyty"} />
            {
                upcommingVisitData.visits.filter(item => item.past).map((item) =>
                    <UpcommingVisit style={styles.marginBottom} upcommingVisitData={item} />
                )
            }
        </> : <Loader />
    )
}