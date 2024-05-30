import React from "react";
import { Text, View, ScrollView } from "react-native";
import MyCarousel from "../../Components/Carousel/MyCarousel";
import UpcommingVisitComponent from "../../Components/MainViews/UpcommingVisitComponent/UpcommingVisitComponent";
import UseFulLinks from "../../Components/MenuComponents/UsefulLinks/UseFulLinks";
import Rodo from "../../Components/Atoms/Rodo/Rodo";
import Menu from "../../Components/MenuComponents/Menu/Menu";

function HomePage({ currentPage, setPage }) {
    return (
        <ScrollView>
            <Menu currentPage={currentPage} changePage={setPage} />
            <MyCarousel currentPage={currentPage} setPage={setPage} />
            <UpcommingVisitComponent setPage={setPage} />
            <UseFulLinks setPage={setPage} />
            <Rodo />
        </ScrollView>
    );
}

export default HomePage;