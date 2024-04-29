import React from "react";
import Menu from "../../Components/MenuComponents/Menu/Menu";
import { View, ScrollView } from "react-native";
import BookVisit from "../../Components/MainViews/BookVisit/BookVisit";
import Header from "../../Components/Header/Header";

export default function BookVisitPage({currentPage, setPage}){
    return (
        <ScrollView>
            <Menu currentPage={currentPage} changePage={setPage} />
            <Header content={"Umów wizytę"}/>
            <BookVisit />
        </ScrollView>
    )
}