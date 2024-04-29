import React from "react";
import ExpertPerson from "../../Atoms/ExpertPerson/ExpertPerson";

const services =  [
    {
        id: 1, 
        name: "zastrzyk"
    },
    {
        id: 2, 
        name: "mierzenie ciśnienia"
    },
    {
        id: 3, 
        name: "pobranie krwi"
    },
    {
        id: 4, 
        name: "zmiana opatrunku"
    },
    {
        id: 5, 
        name: "posprzątanie domu"
    },
]

const specialists = {
    persons: [
        {
            name: "dr Anna Lewandowska",
            speciality: "Kardiolog",
            rateAvg: 3,
            photo: null, 
            services: [1, 2, 3, 4, 5],
            opinions: [
                {
                    mark: 3, 
                    title: "jest ok, jest ok, jest ok jest okjest okjest ok",
                    comment: "bez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok, jest ok, jest ok jest okjest okjest ok",
                    comment: "bez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok, jest ok, jest ok jest okjest okjest ok",
                    comment: "bez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok, jest ok, jest ok jest okjest okjest ok",
                    comment: "bez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok, jest ok, jest ok jest okjest okjest ok",
                    comment: "bez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarzabez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
            ]
        },
        {
            name: "dr Anna Lewandowska",
            speciality: "Kardiolog",
            rateAvg: 3,
            photo: null, 
            services: [1, 2, 3, 4, 5],
            opinions: [
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
            ]
        },
        {
            name: "dr Anna Lewandowska",
            speciality: "Kardiolog",
            rateAvg: 3,
            photo: null, 
            services: [1, 2, 3, 4, 5],
            opinions: [
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
                {
                    mark: 3, 
                    title: "jest ok",
                    comment: "bez komentarza"
                },
            ]
        },
    ]
}

export default function Persons(){
    return (
        specialists.persons.map((item) =>
        <ExpertPerson person={item} services={services.filter((ser) => item.services.includes(ser.id))}/>
        )
    )
}