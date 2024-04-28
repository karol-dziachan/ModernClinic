import React from "react";
import { Text, View, ScrollView } from "react-native";
import MyCarousel from "../../Components/Carousel/MyCarousel";
import UpcommingVisitComponent from "../../Components/UpcommingVisitComponent/UpcommingVisitComponent";
import UseFulLinks from "../../Components/UsefulLinks/UseFulLinks";
import Rodo from "../../Components/Rodo/Rodo";
import Menu from "../../Components/Menu/Menu";

function HomePage({currentPage, setPage}) {
    return (
        <ScrollView>
            <Menu currentPage={currentPage} changePage={setPage} />
            <MyCarousel/>
            <UpcommingVisitComponent setPage = {setPage}/>
            <UseFulLinks setPage={setPage}/>
           <Rodo /> 
        </ScrollView>
    );
}

export default HomePage;