import React from "react";
import Menu from "../../Components/Menu/Menu";
import Visits from "../../Components/Visits/Visits";
import { ScrollView } from "react-native";

export default function UpcommingVisitPage({currentPage, setPage}){
    return (
        <ScrollView>
            <Menu currentPage={currentPage} changePage={setPage} />
            <Visits />
        </ScrollView>
    )
}