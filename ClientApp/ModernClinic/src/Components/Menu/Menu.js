import React, {useState} from "react";
import { View, StatusBar, SafeAreaView, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Hamburger from "../Hamburger/Hamburger";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
// import toggleMenu from "../../Functions/toggleMenu";

const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    top: StatusBar.currentHeight || 0,
    marginTop: 0,
    backgroundColor: "#17B5FF",
    width: "100%",
    padding: 15,
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    // marginBottom: 40
  },
  logoContainer: {
    width: 175,
    marginLeft: -145,
    marginTop: -1
  },
  logo: {
    width: "100%",
    objectFit: "contain",
    marginTop: -7,
    marginLeft: 10
  },
  account: {
    marginBottom: -3
  }
});


function Menu({currentPage, changePage}){
      const [menuWidth, setMenuWidth] = useState(new Animated.Value(screenWidth));

    const toggleMenu = () => {
        const toValue = menuWidth._value === 0 ? screenWidth : 0;
        Animated.timing(menuWidth, {
            toValue,
            duration: 300,
            useNativeDriver: false
        }).start();
    }

    return (
      <>
        <SafeAreaView  style={styles.container}>
         <View><Hamburger onPress={toggleMenu}/></View>
         <View style={styles.logoContainer}><Image source={require('../../../assets/modernclinicmenu.png')} style={styles.logo}/></View>
         <View style={styles.account}><Icon name="user-alt" size={30} color="white" /></View>
        </SafeAreaView >
        <ToggleMenu currentPage={currentPage} changePage={changePage} toggleFun={toggleMenu} menuWidth={menuWidth}/>
      </>
    );
}

export default Menu;