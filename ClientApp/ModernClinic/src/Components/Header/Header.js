import React from "react";

import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    headerContent: {
        fontFamily: "Roboto-Medium",
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center',
        color: "rgba(23, 181, 255, 0.8)",
    },
    icon: {

    },
    bar: {
        marginTop: 15,
        width: 0.9 * screenWidth,
        height: 2,
        backgroundColor: 'rgba(98, 98, 98, 0.4)',
        marginLeft: "auto",
        marginRight: "auto",
    },
    marginTop: {
        marginTop: 40
    }
})

export default function Header({ content, setPage, page }) {
    return (
        <>
            {
                page !== undefined &&
                <TouchableOpacity onPress={() => setPage(page)}>
                    <Text style={styles.headerContent}>
                        {content}
                        <>&nbsp;
                            <Icon name='chevron-right' style={styles.icon} size={15} color="rgba(23, 181, 255, 0.8)" />
                            &nbsp;
                            <Icon name='chevron-right' style={styles.icon} size={15} color="rgba(23, 181, 255, 0.6)" />
                            &nbsp;
                            <Icon name='chevron-right' style={styles.icon} size={15} color="rgba(23, 181, 255, 0.4)" />
                        </>
                    </Text>
                    <View style={styles.bar}></View>
                </TouchableOpacity>
            }

            {
                page === undefined &&
                <View style={styles.marginTop}>
                    <Text style={styles.headerContent}>
                        {content}
                    </Text>
                    <View style={styles.bar}></View>
                </View>
            }
        </>
    )
}