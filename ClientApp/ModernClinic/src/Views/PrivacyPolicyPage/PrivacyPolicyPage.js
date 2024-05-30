import React, { useState } from "react";

import { Text, ScrollView } from "react-native";
import Menu from "../../Components/MenuComponents/Menu/Menu";
import Header from "../../Components/Header/Header";
import Accordion from "../../Components/Atoms/Accordion/Accordion";

const tabData = [
    {
        Header: '1. Wstęp',
        Content: <Text>Serdecznie dziękujemy za korzystanie z aplikacji mobilnej Modern Clinic. Niniejszy tekst zawiera informacje dotyczące polityki prywatności oraz ogólnych zasad przetwarzania danych osobowych w naszej aplikacji. W Modern Clinic priorytetem jest ochrona prywatności naszych użytkowników oraz bezpieczne gromadzenie oraz przetwarzanie ich danych osobowych.</Text>
    },
    {
        Header: '2. Zbieranie danych osobowych',
        Content: <Text>Aplikacja Modern Clinic gromadzi dane osobowe użytkowników w celu umożliwienia korzystania z funkcji aplikacji – takich jak zapisywanie się na wizyty medyczne zarówno przez Narodowy Fundusz Zdrowia (NFZ), jak i na wizyty prywatne. Zbierane informacje zawierają między innymi imię, nazwisko, pesel, adres e-mail, numer telefonu oraz dane dotyczące preferencji medycznych użytkownika.</Text>
    },
    {
        Header: '3. Bezpieczeństwo danych osobowych',
        Content: <Text>Troszczymy się o bezpieczeństwo prywatnych informacji naszych użytkowników i zastosowaliśmy odpowiednie środki techniczne i organizacyjne, aby zapewnić ochronę przed dostępem osób nieupoważnionych, utratą, uszkodzeniem lub ujawnieniem. Wszelkie dane przekazywane za pośrednictwem aplikacji Modern Clinic są szyfrowane, aby zapewnić im maksymalne bezpieczeństwo.</Text>
    },
    {
        Header: '4. Przetwarzanie danych osobowych',
        Content: <Text>Dane osobowe gromadzone przez aplikację Modern Clinic są przetwarzane zgodnie z obowiązującymi przepisami prawa oraz wyłącznie w celu umożliwienia użytkownikom korzystania z funkcji aplikacji, takich jak zapisywanie się na wizyty oraz zamawianie usług medycznych do domu. Dane te są wykorzystywane również do prowadzenia analiz statystycznych oraz poprawy jakości świadczonych usług.</Text>
    },
    {
        Header: '5. Udostępnianie danych osobowych',
        Content: <Text>Informacje osobowe użytkowników aplikacji Modern Clinic mogą być udostępniane innym podmiotom jedynie w niezbędnym zakresie, na przykład partnerom medycznym. Zapewniamy, że takie podmioty przestrzegają odpowiednich norm bezpieczeństwa danych osobowych.</Text>
    },
    {
        Header: '6. Prawa użytkowników',
        Content: <Text>Użytkownicy aplikacji Modern Clinic mają prawo do wglądu w swoje dane osobowe, ich poprawiania oraz usuwania. Mogą również w każdym czasie wycofać udzieloną wcześniej zgodę na przetwarzanie danych osobowych. Aby skorzystać z tych praw, prosimy o kontakt z administratorem danych pod adresem podanym w sekcji „Kontakt” w aplikacji Modern Clinic.</Text>
    },
    {
        Header: '7. Aktualizacje polityki prywatności',
        Content: <Text>Polityka prywatności aplikacji Modern Clinic może być okresowo aktualizowana, aby dostosować się do zmian w przepisach prawnych lub postępie technologicznym. Jeżeli dojdzie do istotnych zmian w polityce prywatności, użytkownicy zostaną poinformowani poprzez aplikację lub na adres e-mail podany w profilu.</Text>
    },
]

export default function PrivacyPolicyPage({ currentPage, setPage }) {
    return (<ScrollView>
        <Menu currentPage={currentPage} changePage={setPage} />
        <Header content="Polityka prywatności – ogólne zasady przetwarzania danych osobowych i ochrony prywatności w Modern Clinic" />
        <Accordion tabData={tabData} style={{ marginBottom: 30 }} />
        <Text style={{ fontStyle: 'italic', textAlign: 'center', marginTop: 20, paddingLeft: 20, paddingRight: 20 }}>Dziękujemy za wybór naszej aplikacji Modern Clinic. Gwarantujemy, że podejmujemy wszelkich starań, aby chronić prywatność naszych użytkowników i zapewnić im bezpieczne oraz przyjemne korzystanie z naszych usług medycznych.</Text>
    </ScrollView>
    )
}