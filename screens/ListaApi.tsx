import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ContenedorApi from './componente/contenedorApi';


type Personaje = {
    id: string;
    name: string;
    description: string;
    image: string;
  };

export default function ListaApi() {
     const [datos, setDatos] = useState<Personaje[]>([]);

    useEffect(() => {
        async function leer() {
            try {
                const resp = await fetch('https://jritsqmet.github.io/web-api/crash.json');
                const json = await resp.json();
                setDatos(json);
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        }

        leer();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Personajes</Text>
            <FlatList
                data={datos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ContenedorApi informacion={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: '#0077cc',
    },
});
