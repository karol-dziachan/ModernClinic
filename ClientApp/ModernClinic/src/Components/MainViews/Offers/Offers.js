import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import OffersAccordion from "../../Atoms/OffersAccordion/OffersAccordion";
import Tabs from "../../Atoms/Tabs/Tabs";
import ApiClient from "../../../ApiClient/ApiClient";
import { View, Text } from "react-native";
import Loader from "../../Atoms/Loader/Loader";
var offersCategories = [
    {
        id: 1,
        name: "Domowe wizyty"
    },
    {
        id: 2,
        name: "Kardiologia"
    },
    {
        id: 3,
        name: "Dermatologia"
    },
    {
        id: 4,
        name: "Ginekologia"
    },
    {
        id: 5,
        name: "Urologia"
    },
    {
        id: 6,
        name: "Internista"
    },
]

var offersData = [
    {
        id: 1,
        category: 1,
        name: "Kroplówka",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 2,
        category: 1,
        name: "Zastrzyk",
        promo: null,
        nfz: true,
        privateOffer: true
    },
    {
        id: 3,
        category: 1,
        name: "Szczepienie",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 4,
        category: 1,
        name: "Zmiana opatrunku",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 5,
        category: 1,
        name: "Zdejmowanie gipsu",
        promo: "-50%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 1,
        category: 2,
        name: "Kroplówka",
        promo: "-20%",
        nfz: false,
        privateOffer: true
    },
    {
        id: 2,
        category: 2,
        name: "Zastrzyk",
        promo: null,
        nfz: false,
        privateOffer: true
    },
    {
        id: 3,
        category: 2,
        name: "Szczepienie",
        promo: "-20%",
        nfz: false,
        privateOffer: true
    },
    {
        id: 4,
        category: 2,
        name: "Zmiana opatrunku",
        promo: "-20%",
        nfz: false,
        privateOffer: true
    },
    {
        id: 5,
        category: 2,
        name: "Zdejmowanie gipsu",
        promo: "-50%",
        nfz: false,
        privateOffer: true
    },
    {
        id: 1,
        category: 3,
        name: "Kroplówka",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 2,
        category: 3,
        name: "Zastrzyk",
        promo: null,
        nfz: true,
        privateOffer: true
    },
    {
        id: 3,
        category: 3,
        name: "Szczepienie",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 4,
        category: 3,
        name: "Zmiana opatrunku",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 5,
        category: 3,
        name: "Zdejmowanie gipsu",
        promo: "-50%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 1,
        category: 4,
        name: "Kroplówka",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 2,
        category: 4,
        name: "Zastrzyk",
        promo: null,
        nfz: true,
        privateOffer: true
    },
    {
        id: 3,
        category: 4,
        name: "Szczepienie",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 4,
        category: 4,
        name: "Zmiana opatrunku",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 5,
        category: 4,
        name: "Zdejmowanie gipsu",
        promo: "-50%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 1,
        category: 5,
        name: "Kroplówka",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 2,
        category: 5,
        name: "Zastrzyk",
        promo: null,
        nfz: true,
        privateOffer: true
    },
    {
        id: 3,
        category: 5,
        name: "Szczepienie",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 4,
        category: 5,
        name: "Zmiana opatrunku",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 5,
        category: 5,
        name: "Zdejmowanie gipsu",
        promo: "-50%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 1,
        category: 6,
        name: "Kroplówka",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 2,
        category: 6,
        name: "Zastrzyk",
        promo: null,
        nfz: true,
        privateOffer: true
    },
    {
        id: 3,
        category: 6,
        name: "Szczepienie",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 4,
        category: 6,
        name: "Zmiana opatrunku",
        promo: "-20%",
        nfz: true,
        privateOffer: true
    },
    {
        id: 5,
        category: 6,
        name: "Zdejmowanie gipsu",
        promo: "-50%",
        privateOffer: true

    },
]


export default function Offers() {
    const [offersCategories, setOffersCategories] = useState([]);
    const [offersData, setOffersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiClient = new ApiClient();

    useEffect(async () => {
        try {
                const offData = await apiClient.get('/api/offers');
            const catData = await apiClient.get('/api/offer-categories');
            setOffersCategories(catData);
            setOffersData(offData);
            setLoading(false);
        } catch (error) {
            console.error('Błąd podczas pobierania danych:', error);
        }
    }, []
    );

    return (
        !loading ? <Tabs
            tabs={["Wizyty prywatne", "Wizyty na NFZ"]}
            contents={{
                "Wizyty prywatne": <OffersAccordion isNfzAccordion={false} offersData={offersData.filter((item) => item.privateOffer)} offersCategories={offersCategories.filter((category) =>
                    offersData.some((offer) => offer.category === category.id && offer.privateOffer)
                )} />,
                "Wizyty na NFZ": <OffersAccordion isNfzAccordion={true} offersData={offersData.filter((item) => item.nfz)} offersCategories={offersCategories.filter((category) =>
                    offersData.some((offer) => offer.category === category.id && offer.nfz)
                )} />,
            }}
        />
            : <Loader />
    )
}
