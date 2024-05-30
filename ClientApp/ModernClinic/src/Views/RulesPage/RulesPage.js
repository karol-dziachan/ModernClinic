import React, { useState } from "react";

import { Text, ScrollView } from "react-native";
import Menu from "../../Components/MenuComponents/Menu/Menu";
import Header from "../../Components/Header/Header";
import Accordion from "../../Components/Atoms/Accordion/Accordion";

const tabData = [
    {
        Header: '1. Wstęp',
        Content: <Text>Niniejszy regulamin określa zasady korzystania z aplikacji mobilnej Modern Clinic.
            W momencie decyzji o użytkowaniu aplikacji Modern Clinic, użytkownik akceptuje postanowienia niniejszego regulaminu.
        </Text>

    },
    {
        Header: "2. Zakres usług",
        Content: <Text>
            Aplikacja Modern Clinic oferuje użytkownikom możliwość:
            {"\n"}{"\n"}•	Zapisywania się na wizyty medyczne zarówno przez Narodowy Fundusz Zdrowia (NFZ), jak i na wizyty prywatne.{"\n"}
            {"\n"}•	Zamawiania usług medycznych do domu, obejmujących zarówno świadczenia na NFZ, jak i usługi prywatne.{"\n"}
            {"\n"}•	Korzystania z informacji dotyczących personelu medycznego oraz promocji na usługi prywatne.{"\n"}

        </Text>
    },
    {
        Header: '3.	Rejestracja i konto użytkownika',
        Content: <Text>
            W celu korzystania z pełnych funkcji aplikacji Modern Clinic, użytkownik musi założyć konto.
            {"\n"}{"\n"}Użytkownik ponosi odpowiedzialność za zachowanie poufności swojego hasła oraz za wszystkie czynności dokonane za jego pośrednictwem.
        </Text>
    },
    {
        Header: '4.	Ograniczenia korzystania z aplikacji',
        Content: <Text>
            Użytkownik zobowiązuje się używać aplikacji zgodnie z obowiązującymi przepisami prawa oraz normami etycznymi.
            {"\n"}{"\n"}Zakazane jest łamanie praw autorskich i innych praw własności intelektualnej związanych z aplikacją Modern Clinic.
        </Text>
    },
    {
        Header: '5.	Ochrona danych osobowych',
        Content: <Text>
            Dane osobowe użytkowników są przetwarzane zgodnie z obowiązującymi przepisami prawa oraz zgodnie z polityką prywatności aplikacji Modern Clinic.
            {"\n"}{"\n"}Administrator danych zapewnia bezpieczeństwo danych osobowych oraz stosuje odpowiednie środki techniczne i organizacyjne w celu ochrony tych danych.
        </Text>
    },
    {
        Header: '6. Zmiany w regulaminie',
        Content: <Text>
            Regulamin może być zmieniany w dowolnym czasie.
            {"\n"}{"\n"}W przypadku zmian w regulaminie, użytkownicy zostaną poinformowani poprzez powiadomienia w aplikacji lub na podany adres e-mail.
        </Text>
    },
    {
        Header: '7. Inne kwestie',
        Content: <Text>
            Wszelkie problemy związane z korzystaniem z aplikacji Modern Clinic będą rozstrzygane zgodnie z przepisami prawa właściwymi dla siedziby administratora aplikacji.
            {"\n"}{"\n"}Regulamin wchodzi w życie z dniem jego opublikowania w aplikacji Modern Clinic.
            {"\n"}{"\n"}Wszelkie pytania lub uwagi dotyczące regulaminu należy kierować na adres podany w sekcji „Kontakt” w aplikacji Modern Clinic.

        </Text>
    }
]

export default function RulesPage({ currentPage, setPage }) {
    return (<ScrollView>
        <Menu currentPage={currentPage} changePage={setPage} />
        <Header content="Regulamin korzystania z aplikacji Modern Clinic" />
        <Accordion tabData={tabData} style={{ marginBottom: 30 }} />
        <Text style={{ fontStyle: 'italic', textAlign: 'center', marginTop: 20 }}>Dziękujemy za korzystanie z aplikacji Modern Clinic</Text>
    </ScrollView>
    )
}