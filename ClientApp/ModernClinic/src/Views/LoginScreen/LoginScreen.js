import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import Host from '../../Globals/Host';

export default function LoginScreen({ setToken }) {

    const [showLogin, setShowLogin] = useState(false);
    const handleLoginPress = () => {
        setShowLogin(true);
    }
    const onNavigationStateChange = (webViewState) => {
        const url = webViewState.url;
        if (url.includes('#id_token=')) {
            const token = url.split('#id_token=')[1].split('&')[0];
            setToken(token);
        }
    };

    return (
        <>
            {
                showLogin && <WebView
                    source={{ uri: `http://${Host}/api/account/login` }}
                    onNavigationStateChange={onNavigationStateChange}
                />
            }
            {
                !showLogin &&
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={{ marginBottom: 20 }}>
                            <Image source={require('../../../assets/modernclinicmenu.png')} />
                        </View>
                        <Text style={styles.text}>Do korzystania z aplikacji Modern Clinic, musisz się zalogować</Text>
                        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                            <Text style={styles.buttonText}>Zaloguj się</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
