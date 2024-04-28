import React from "react";
import { Text, View, ScrollView } from "react-native";
import MyCarousel from "../../Components/Carousel/MyCarousel";
import UpcommingVisitComponent from "../../Components/UpcommingVisitComponent/UpcommingVisitComponent";

function HomePage({setPage}) {
    return (
        <ScrollView>
            <MyCarousel/>
            <UpcommingVisitComponent setPage = {setPage}/>
        </ScrollView>
    );
}

export default HomePage;