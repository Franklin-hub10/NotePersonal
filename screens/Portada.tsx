import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../browsers/MainNavigator';

export default function Portada() {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <ImageBackground
            source={require('../assets/images/A_vintage_styled_illustration_640x640.png')}
            style={styles.background}
            resizeMode="cover"

        >
            <Text style={styles.text}>Franklin Polacin</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.registerText}>Iniciar</Text>
            </TouchableOpacity>

        </ImageBackground>

    )
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold', // Texto destacado
        color: '#5a3e2b', // Marrón oscuro, acorde al tema vintage
        textAlign: 'justify',
        alignItems: 'flex-start',
        marginBottom: 20,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    registerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#5a3e2b',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#d9b382',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 8,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },

})