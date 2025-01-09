import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ContenedorApi(props: any) {
    const { informacion } = props;

    const mostrarDetalles = () => {
        Alert.alert(
            'Detalles del Personaje',
            `Nombre: ${informacion.name}\nDescripción: ${informacion.description}`,
        );
    };

    return (
        <TouchableOpacity style={styles.container} onPress={mostrarDetalles}>
            <Text style={styles.txtTitulo}>{informacion.name}</Text>
            <View style={styles.fila}>
                <Image source={{ uri: informacion.image }} style={styles.img} />
                <Text style={styles.txtDescripcion}>{informacion.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0077cc',
        margin: 5,
        padding: 10,
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txtTitulo: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ec2f0e',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 15,
        marginRight: 10,
    },
    txtDescripcion: {
        color: '#ffffff',
        flex: 1,
        textAlign: 'justify',
        fontSize: 15,
    },
});