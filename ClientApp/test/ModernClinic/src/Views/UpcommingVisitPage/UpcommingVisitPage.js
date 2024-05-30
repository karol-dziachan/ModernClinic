import React from "react";
import Menu from "../../Components/MenuComponents/Menu/Menu";
import Visits from "../../Components/MainViews/Visits/Visits";
import { ScrollView } from "react-native";

export default function UpcommingVisitPage({currentPage, setPage}){
    return (
        <ScrollView>
            <Menu currentPage={currentPage} changePage={setPage} />
            <Visits />
        </ScrollView>
    )
}