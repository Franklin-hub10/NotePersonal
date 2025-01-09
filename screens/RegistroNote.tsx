import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ref, set } from 'firebase/database'
import { db } from '../config/Config'

export default function RegistroNote() {
    const [cedula, setcedula] = useState('')
    const [nombre, setNombre] = useState('')
    const [recordatorio, setRecordatorio] = useState('')
    const [fecha, setFecha] = useState('')




    /// guardar 
    function guardar() {
        set(ref(db, 'usuarios/' + cedula), {
            name: nombre,
            date: fecha,
            note: recordatorio,


        }), Alert.alert('Mensaje', 'Recordatorio Almacenado');

        limpiar();
    }


    function limpiar() {

        setNombre('')
        setcedula('')
        setRecordatorio('')
        setFecha('')
    }


    return (
        <ImageBackground
            source={require('../assets/images/A_vintage_styled_illustration_bw.png')}
            style={styles.background}
            resizeMode="cover"

        >

            <Text style={styles.title}>Registra tu recordatorio</Text>
            <TextInput
                placeholder='Ingresar cedula'
                style={styles.input}
                onChangeText={(texto) => setcedula(texto)}
            />

            <TextInput
                placeholder='Ingresar Nombre'
                style={styles.input}
                onChangeText={(texto) => setNombre(texto)}
                value={nombre}
            />

            <TextInput
                placeholder='Ingresa un recodartorio'
                style={styles.input}
                onChangeText={(texto) => setRecordatorio(texto)}
                value={recordatorio}
            />

            <TextInput placeholder='Ingresa una fecha'
                style={styles.input}
                onChangeText={(texto) => setFecha(texto)}

            />
            <View style={styles.button}>
                <Button title='Guardar' onPress={() => guardar()} />
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#f2ebe3', // Tono beige claro para un fondo cálido
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        fontSize: 18,
        backgroundColor: '#fff', // Fondo blanco para contraste
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#b8a398', // Tono beige oscuro
        paddingHorizontal: 15,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2, // Sombra para Android
    },
    button: {
        marginVertical: 15,
        backgroundColor: '#d9b382', // Botón beige cálido
        
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Sombra para Android
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    backgroundColor:'#d9b382'
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'flex-start',
        marginBottom: 20,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        textAlign: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


