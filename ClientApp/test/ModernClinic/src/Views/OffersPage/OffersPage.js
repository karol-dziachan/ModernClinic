import React from "react";
import Menu from "../../Components/MenuComponents/Menu/Menu";
import Offers from "../../Components/MainViews/Offers/Offers";
import Header from "../../Components/Header/Header";
import { ScrollView } from "react-native";

export default function OffersPage({currentPage, setPage}){
    return (<ScrollView>
     <Menu currentPage={currentPage} changePage={setPage} />
        <Header content={"Usługi"} />
        <Offers />
    </ScrollView>)
}