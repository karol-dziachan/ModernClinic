import React from "react";
import Header from "../Header/Header";
import UpcommingVisit from "../UpcommingVisit/UpcommingVisit";

const upcommingVisitData = {
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

}

export default function UpcommingVisitComponent({ setPage }) {
    return (
        <>
            <Header content={"Nadchodzące wizyty"} setPage={setPage} page={'UpcommingVisitPage'} />
            <UpcommingVisit upcommingVisitData={upcommingVisitData} />
        </>
    );
}
