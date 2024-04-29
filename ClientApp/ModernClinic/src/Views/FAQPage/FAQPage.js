import React, {useState} from "react";

import { Text, ScrollView } from "react-native";
import Menu from "../../Components/MenuComponents/Menu/Menu";
import Header from "../../Components/Header/Header";
import Accordion from "../../Components/Atoms/Accordion/Accordion";

const tabData = [
    {
        Header: '1.	Czy mogę używać aplikacji Modern Clinic bez wcześniejszej rejestracji?',
        Content: <Text>Nie, aby móc korzystać z pełnych funkcji aplikacji, konieczna jest rejestracja oraz założenie konta.</Text>
    },
    {
        Header: '2.	Jak mogę zapisać się na wizytę lekarską przez aplikację Modern Clinic?',
        Content: <Text>Po zalogowaniu się do aplikacji, przejdź do sekcji "Umów wizytę" i postępuj zgodnie z instrukcjami, wybierając preferowany termin i specjalistę, a także podając informacje czy wizyta jest prywatna czy na NFZ.</Text>
    },
    {
        Header: '3.	Czy mogę zamawiać usługi medyczne do domu przez aplikację?',
        Content: <Text>Tak, aplikacja Modern Clinic oferuje możliwość zamawiania usług medycznych do domu, zarówno na NFZ, jak i w formie usług prywatnych. Wystarczy przejść do odpowiedniej sekcji, wypełnić formularz zaznaczając wizytę domową, co poskutkuje umówieniem wizyty.</Text>
    },
    {
        Header: '4.	Problemy z aplikacją  – co robić?',
        Content: <Text>Jeśli masz pytania dotyczące używania aplikacji lub będziesz mieć problemy techniczne, skontaktuj się z naszym działem obsługi klienta poprzez formularz kontaktowy w aplikacji lub na podany adres e-mail. Więcej szczegółów znajdziesz w sekcji „Kontakt”.</Text>
    },
    {
        Header: '5.	Czy mogę cofnąć moją zgodę na przetwarzanie danych osobowych?',
        Content: <Text>Tak, każdy użytkownik ma prawo do wycofania się z udzielonej wcześniej zgody na przetwarzanie danych osobowych. Wystarczy skontaktować się z administratorem danych poprzez aplikację. Więcej szczegółów znajdziesz w sekcji „Kontakt”.</Text>
    },
    {
        Header: '6.	Czy często zostaje aktualizowana polityka prywatności aplikacji Modern Clinic?',
        Content: <Text>Polityka prywatności jest aktualizowana w ramach potrzeby, aby dostosować się do wprowadzanych zmian prawnych lub technologicznych. Wszyscy użytkownicy aplikacji zostaną poinformowani o istotnych zmianach poprzez powiadomienia lub na podany adres e-mail.</Text>
    },
    {
        Header: '7.	Czy dane osobowe przekazywane za pośrednictwem aplikacji są bezpieczne?',
        Content: <Text>Tak, dbamy o bezpieczeństwo danych osobowych naszych użytkowników i stosujemy odpowiednie środki techniczne i organizacyjne, aby zapewnić im maksymalną ochronę.</Text>
    },
]

export default function FAQPage({currentPage, setPage}){
    return (<ScrollView>
     <Menu currentPage={currentPage} changePage={setPage} />
     <Header content="Polityka prywatności – ogólne zasady przetwarzania danych osobowych i ochrony prywatności w Modern Clinic" />
     <Accordion tabData={tabData} style={{marginBottom: 30}} /> 
     <Text style={{fontWeight:'600', textAlign: 'center', marginTop: 20, paddingLeft: 20, paddingRight: 20}}>Jeśli chcesz zadać więcej pytań, skontaktuj się z nami (szczegóły w sekcji „Kontakt”), a nasi przedstawiciele postarają się rozwiać wszelkie wątpliwości.</Text>
     <Text style={{fontStyle: 'italic', textAlign: 'center', marginTop: 20, paddingLeft: 20, paddingRight: 20}}>Dziękujemy za korzystanie z aplikacji Modern Clinic.</Text>
    </ScrollView>
    )
}