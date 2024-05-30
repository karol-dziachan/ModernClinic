import React from "react";
import Menu from "../../Components/MenuComponents/Menu/Menu";
import { ScrollView, View } from "react-native";
import Header from "../../Components/Header/Header";
import Persons from "../../Components/MainViews/Persons/Persons";

export default function SpecialistsPage({currentPage, setPage}){
    return (
        <ScrollView>
            <Menu currentPage={currentPage} changePage={setPage} />
            <Header content={"Nasi specjaliści"} />
            <Persons setPage={setPage}/>
        </ScrollView>
    )
}