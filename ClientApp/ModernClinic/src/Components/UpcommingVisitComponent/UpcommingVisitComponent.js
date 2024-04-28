import React from "react";
import Header from "../Header/Header";
import UpcommingVisit from "../UpcommingVisit/UpcommingVisit";

export default function UpcommingVisitComponent({setPage}){
    return (
        <>
            <Header content={"Nadchodzące wizyty"} setPage = {setPage}/>
            <UpcommingVisit/>
        </>
    )
}