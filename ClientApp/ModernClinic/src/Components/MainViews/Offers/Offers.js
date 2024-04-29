import React from "react";
import Header from "../../Header/Header";
import OffersAccordion from "../../Atoms/OffersAccordion/OffersAccordion";
import Tabs from "../../Atoms/Tabs/Tabs";

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
        private: true
    },
    {
        id: 2,
        category: 1, 
        name: "Zastrzyk",
        promo: null,
        nfz: true, 
        private: true
    },
    {
        id: 3,
        category: 1, 
        name: "Szczepienie",
        promo: "-20%",
        nfz: true, 
        private: true
    },
    {
        id: 4,
        category: 1, 
        name: "Zmiana opatrunku",
        promo: "-20%",
        nfz: true, 
        private: true
    },
    {
        id: 5,
        category: 1, 
        name: "Zdejmowanie gipsu",
        promo: "-50%",
        nfz: true, 
        private: true
    },
    {
        id: 1,
        category: 2, 
        name: "Kroplówka",
        promo: "-20%",
        nfz: false, 
        private: true
    },
    {
        id: 2,
        category: 2, 
        name: "Zastrzyk",
        promo: null,
                nfz: false, 
        private: true
    },
    {
        id: 3,
        category: 2, 
        name: "Szczepienie",
        promo: "-20%",
                nfz: false, 
        private: true
    },
    {
        id: 4,
        category: 2, 
        name: "Zmiana opatrunku",
        promo: "-20%",
                nfz: false, 
        private: true
    },
    {
        id: 5,
        category: 2, 
        name: "Zdejmowanie gipsu",
        promo: "-50%",
                nfz: false, 
        private: true
    },
    {
        id: 1,
        category: 3, 
        name: "Kroplówka",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 2,
        category: 3, 
        name: "Zastrzyk",
        promo: null,
                nfz: true, 
        private: true
    },
    {
        id: 3,
        category: 3, 
        name: "Szczepienie",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 4,
        category: 3, 
        name: "Zmiana opatrunku",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 5,
        category: 3, 
        name: "Zdejmowanie gipsu",
        promo: "-50%",
                nfz: true, 
        private: true
    },
    {
        id: 1,
        category: 4, 
        name: "Kroplówka",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 2,
        category: 4, 
        name: "Zastrzyk",
        promo: null,
                nfz: true, 
        private: true
    },
    {
        id: 3,
        category: 4, 
        name: "Szczepienie",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 4,
        category: 4, 
        name: "Zmiana opatrunku",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 5,
        category: 4, 
        name: "Zdejmowanie gipsu",
        promo: "-50%",
                nfz: true, 
        private: true
    },
    {
        id: 1,
        category: 5, 
        name: "Kroplówka",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 2,
        category: 5, 
        name: "Zastrzyk",
        promo: null,
                nfz: true, 
        private: true
    },
    {
        id: 3,
        category: 5, 
        name: "Szczepienie",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 4,
        category: 5, 
        name: "Zmiana opatrunku",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 5,
        category: 5, 
        name: "Zdejmowanie gipsu",
        promo: "-50%",
                nfz: true, 
        private: true
    },
    {
        id: 1,
        category: 6, 
        name: "Kroplówka",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 2,
        category: 6, 
        name: "Zastrzyk",
        promo: null,
                nfz: true, 
        private: true
    },
    {
        id: 3,
        category: 6, 
        name: "Szczepienie",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 4,
        category: 6, 
        name: "Zmiana opatrunku",
        promo: "-20%",
                nfz: true, 
        private: true
    },
    {
        id: 5,
        category: 6, 
        name: "Zdejmowanie gipsu",
        promo: "-50%",
        private: true

    },
]

export default function Offers(){
    return (
              <Tabs
        tabs={["Wizyty prywatne", "Wizyty na NFZ" ]}
        contents={{
          "Wizyty prywatne":<OffersAccordion offersData={ offersData.filter((item) => item.private)} offersCategories={offersCategories.filter((category) =>
    offersData.some((offer) => offer.category === category.id && offer.private)
  )}/>,
          "Wizyty na NFZ":<OffersAccordion offersData={ offersData.filter((item) => item.nfz)} offersCategories={offersCategories.filter((category) =>
    offersData.some((offer) => offer.category === category.id && offer.nfz)
  )}/>,
        }}
      />
    )
}
