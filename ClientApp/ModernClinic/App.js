import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/Views/HomePage/HomePage';
import Menu from './src/Components/Menu/Menu';
import GetFonts from './src/Loaders/FontLoader/GetFonts';
import ToggleMenu from './src/Components/ToggleMenu/ToggleMenu';
import React, { useState } from 'react';
import ContactPage from './src/Views/Contakt/ContactPage';

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
      <View><Menu currentPage={currentPage} changePage={changePage} /></View>
      {currentPage === 'HomePage' && <HomePage setPage={setCurrentPage} />}
      {currentPage === 'ContactPage' && <ContactPage />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingBottom: 60
  },
});
