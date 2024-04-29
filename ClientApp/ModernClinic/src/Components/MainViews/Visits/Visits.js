import React from "react";
import Header from "../../Header/Header";
import UpcommingVisit from "../../Atoms/UpcommingVisit/UpcommingVisit";
import { StyleSheet } from "react-native";

const upcommingVisitData = {
    visits: [
        {
            isPast: false,
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
        },
        {
            isPast: false,
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
        },
        {
            isPast: false,
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
        },
        {
            isPast: true,
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
        },
        {
            isPast: true,
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
        },
        {
            isPast: true,
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
        },
    ]
}

const styles = StyleSheet.create({
    marginBottom: {
        marginBottom: 20
    }
})

export default function Visits(){
    return(
        <>
            <Header content={"Nadchodzące wizyty"} /> 
            {
                upcommingVisitData.visits.filter(item => !item.isPast).map((item) =>
                <UpcommingVisit style={styles.marginBottom} upcommingVisitData={item}/>
            )
            }
            <Header content={"Odbyte wizyty"}   /> 
                {
                upcommingVisitData.visits.filter(item => item.isPast).map((item) =>
                <UpcommingVisit style={styles.marginBottom} upcommingVisitData={item}/>
            )
            }
        </>
    )
}