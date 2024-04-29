import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/Views/HomePage/HomePage';
import Menu from './src/Components/MenuComponents/Menu/Menu';
import GetFonts from './src/Loaders/FontLoader/GetFonts';
import ToggleMenu from './src/Components/MenuComponents/ToggleMenu/ToggleMenu';
import React, { useState } from 'react';
import ContactPage from './src/Views/Contakt/ContactPage';
import ComplaintsPage from './src/Views/ComplaintsPage/ComplaintsPage';
import FAQPage from './src/Views/FAQPage/FAQPage';
import PrivacyPolicyPage from './src/Views/PrivacyPolicyPage/PrivacyPolicyPage';
import RulesPage from './src/Views/RulesPage/RulesPage';
import UpcommingVisitPage from './src/Views/UpcommingVisitPage/UpcommingVisitPage';
import SpecialistsPage from './src/Views/Specialists/SpecialistsPage';
import OffersPage from './src/Views/OffersPage/OffersPage';
import BookVisitPage from './src/Views/BookVisitPage/BookVisitPage';

export default function App() {
  var fontsLoaded = GetFonts();
   const [currentPage, setCurrentPage] = useState('HomePage');

  if(!fontsLoaded){
   return ( <Text>Coś nie tak</Text>)
  }

  const changePage = (page) => {
    setCurrentPage(page);
  }

  return (
    <View style={styles.container}>
      {currentPage === 'HomePage' && <HomePage currentPage={currentPage} setPage={setCurrentPage} />}
      {currentPage === 'ContactPage' && <ContactPage currentPage={currentPage} setPage={setCurrentPage} />}
      {currentPage === 'UpcommingVisitPage' && <UpcommingVisitPage currentPage={currentPage} setPage={setCurrentPage} />}
      {currentPage === 'SpecialistsPage' && <SpecialistsPage currentPage={currentPage} setPage={setCurrentPage} />}
      {currentPage === 'OffersPage' && <OffersPage currentPage={currentPage} setPage={setCurrentPage} />}
      {currentPage === 'BookVisitPage' && <BookVisitPage currentPage={currentPage} setPage={setCurrentPage} />}

      {/* useful links */}
      {currentPage === 'ComplaintsPage' && <ComplaintsPage currentPage={currentPage} setPage={setCurrentPage} />}
      {currentPage === 'FAQPage' && <FAQPage currentPage={currentPage} setPage={setCurrentPage} />}
      {currentPage === 'PrivacyPolicyPage' && <PrivacyPolicyPage currentPage={currentPage} setPage={setCurrentPage} />}
      {currentPage === 'RulesPage' && <RulesPage currentPage={currentPage} setPage={setCurrentPage} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingBottom: 45
  },
});
