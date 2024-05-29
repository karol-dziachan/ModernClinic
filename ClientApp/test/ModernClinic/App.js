import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/Views/HomePage/HomePage';
import Menu from './src/Components/MenuComponents/Menu/Menu';
import GetFonts from './src/Loaders/FontLoader/GetFonts';
import { Button } from 'react-native';
import ToggleMenu from './src/Components/MenuComponents/ToggleMenu/ToggleMenu';
import React, { useState, useEffect } from 'react';
import ContactPage from './src/Views/Contakt/ContactPage';
import ComplaintsPage from './src/Views/ComplaintsPage/ComplaintsPage';
import FAQPage from './src/Views/FAQPage/FAQPage';
import PrivacyPolicyPage from './src/Views/PrivacyPolicyPage/PrivacyPolicyPage';
import RulesPage from './src/Views/RulesPage/RulesPage';
import UpcommingVisitPage from './src/Views/UpcommingVisitPage/UpcommingVisitPage';
import SpecialistsPage from './src/Views/Specialists/SpecialistsPage';
import OffersPage from './src/Views/OffersPage/OffersPage';
import BookVisitPage from './src/Views/BookVisitPage/BookVisitPage';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import { TouchableOpacity } from 'react-native';
import Auth0 from 'react-native-auth0';
import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import { Platform } from 'react-native';

const config = {
  clientId: "hJJsjt1NHL7kl1gqgNdsVpyQd1Wh7AoH",
  domain: "dev-ybphej2xq6gl61hx.us.auth0.com"
};

const auth0 = new Auth0(config);

const customScheme = 'com.auth0samples'; 

function Home() {
  // 👇 new code
  const {authorize, user, error} = useAuth0();

  const onLogin = async () => {
    try {
      console.log('start')
      await authorize({
        scope: 'openid profile email'
      }, {
        customScheme: customScheme,
        // audience: 'ModernClinic'
      })        .then(credentials => console.log('credentials ', credentials))
        .catch(error => console.log('error 2 ', error));;
      console.log('end')
    } catch (e) {
      console.log('There was an issue authenticating the user. Please try again.');
      console.log(e)
    }
  };

  if(error){
    console.log('error ', error)
  }
  // 👆 new code

    return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0 React Native - Login </Text>

      <Button
        onPress={onLogin}
        title={'Log In'}
      />
    </View>
  );
}

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
  <Auth0Provider domain={"dev-ybphej2xq6gl61hx.us.auth0.com"} clientId={"Ijbt0hvJOiDNUt2pRIgj4D42bB2uPfAt"}> 
     <Home />
  
    </Auth0Provider> 

    // <View style={styles.container}>
    //   {currentPage === 'HomePage' && <HomePage currentPage={currentPage} setPage={setCurrentPage} />}
    //   {currentPage === 'ContactPage' && <ContactPage currentPage={currentPage} setPage={setCurrentPage} />}
    //   {currentPage === 'UpcommingVisitPage' && <UpcommingVisitPage currentPage={currentPage} setPage={setCurrentPage} />}
    //   {currentPage === 'SpecialistsPage' && <SpecialistsPage currentPage={currentPage} setPage={setCurrentPage} />}
    //   {currentPage === 'OffersPage' && <OffersPage currentPage={currentPage} setPage={setCurrentPage} />}
    //   {currentPage === 'BookVisitPage' && <BookVisitPage currentPage={currentPage} setPage={setCurrentPage} />}

    //   {/* useful links */}
    //   {currentPage === 'ComplaintsPage' && <ComplaintsPage currentPage={currentPage} setPage={setCurrentPage} />}
    //   {currentPage === 'FAQPage' && <FAQPage currentPage={currentPage} setPage={setCurrentPage} />}
    //   {currentPage === 'PrivacyPolicyPage' && <PrivacyPolicyPage currentPage={currentPage} setPage={setCurrentPage} />}
    //   {currentPage === 'RulesPage' && <RulesPage currentPage={currentPage} setPage={setCurrentPage} />}
    // </View>
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

