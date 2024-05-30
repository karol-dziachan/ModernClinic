import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import Host from '../../Globals/Host';

export default function LogOutScreen({ setToken }) {

    const [showLogout, setShowLogOut] = useState(true);

    const onNavigationStateChange = (webViewState) => {
        const url = webViewState.url;
        if (url.includes('loginResult')) {
            setToken(null);
            setShowLogOut(false)
        }
    };

    return (
        <>
            {
                showLogout && <WebView
                    source={{ uri: `http://${Host}/api/account/logout` }}
                    onNavigationStateChange={onNavigationStateChange}
                />
            }

        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#17B5FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#17B5FF',
        borderRadius: 4,
        width: 150,
        padding: 15,
        margin: 10,
    },
    buttonText: {
        color: '#17B5FF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
