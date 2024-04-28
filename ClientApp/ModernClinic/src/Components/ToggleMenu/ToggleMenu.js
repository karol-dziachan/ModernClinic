import React from "react";
import { StyleSheet, StatusBar, Text,Dimensions , TouchableOpacity, Animated, View   } from "react-native";

const statusBarHeight = StatusBar.currentHeight ?? 0;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    toggleMenuContainer: {
        backgroundColor: "#CFF0FF",
        position: "absolute",
        top: 88, 
        left: 0,
        bottom: 0,
        right: 0,
        height: 1000,
        zIndex: 3,
    },
    menuItem: {
        fontFamily: "Roboto",
        textAlign: "center",
        fontSize: 18,
        color: "#626262"
        
    },
    menuItemContainer: {
        marginTop: 20, 
        marginBottom: 20
    },
    bar: {
        backgroundColor: 'rgba(255, 255, 255, .8)',
        width: 0.8*screenWidth,
        height: 1,
        marginLeft: "auto",
        marginRight: "auto",
    }

})

function ToggleMenu({currentPage, changePage, toggleFun, menuWidth}){

    const handlePageChange = (page) => {
        changePage(page);
        toggleFun();
    }

    return(
          <Animated.View style={[styles.toggleMenuContainer, { width: menuWidth }]}>
                <TouchableOpacity style={styles.menuItemContainer} onPress={() => handlePageChange('HomePage')}>
                    <Text style={styles.menuItem}>Strona główna</Text>
                </TouchableOpacity>
                <Animated.View style={[styles.bar, { width: menuWidth }]} />
                <TouchableOpacity style={styles.menuItemContainer} onPress={() => handlePageChange('Umów wizytę')}>
                    <Text style={styles.menuItem}>Umów wizytę</Text>
                </TouchableOpacity>
                <Animated.View style={[styles.bar, { width: menuWidth }]} />
                <TouchableOpacity style={styles.menuItemContainer} onPress={() => handlePageChange('Usługi')}>
                    <Text style={styles.menuItem}>Usługi</Text>
                </TouchableOpacity>
                <Animated.View style={[styles.bar, { width: menuWidth }]} />
                <TouchableOpacity style={styles.menuItemContainer} onPress={() => handlePageChange('Nasi specjaliści')}>
                    <Text style={styles.menuItem}>Nasi specjaliści</Text>
                </TouchableOpacity>
                <Animated.View style={[styles.bar, { width: menuWidth }]} />
                <TouchableOpacity style={styles.menuItemContainer} onPress={() => handlePageChange('ContactPage')}>
                    <Text style={styles.menuItem}>Kontakt</Text>
                </TouchableOpacity>
                <Animated.View style={[styles.bar, { width: menuWidth }]} />
            </Animated.View>
    )
}

export default ToggleMenu;