import React from "react";
import { View, StatusBar, SafeAreaView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Hamburger from "../Hamburger/Hamburger";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    top: StatusBar.currentHeight || 0,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#17B5FF",
    width: "100%",
    padding: 15,
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    // flex: 1
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

function Menu(){
    return (
       <SafeAreaView  style={styles.container}>
                <View><Hamburger/></View>
                <View style={styles.logoContainer}><Image source={require('../../../assets/modernclinicmenu.png')} style={styles.logo}/></View>
                <View style={styles.account}><Icon name="user" size={30} color="white" /></View>
        </SafeAreaView >
    );
}

export default Menu;