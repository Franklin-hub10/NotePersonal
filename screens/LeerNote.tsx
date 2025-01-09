import {   Alert, FlatList, ImageBackground,  StyleSheet,  Text, TextInput,  View,} from 'react-native';
import React, { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../config/Config';
import Informacion from './componente/Informacion';

type Registro = {
    id: string;
    name: string;
    date: string;
    note: string;
  };
  
export default function LeerNote() {
    const [cedula, setCedula] = useState('');
    const [registro, setRegistro] = useState<Registro | null>(null);

    const [lista, setLista] = useState<Registro[]>([]);

    // Función para buscar un registro por cédula
    const buscarRegistro = () => {
        if (!cedula) {
            Alert.alert('Error', 'Por favor ingresa una cédula');
            return;
        }

        const starCountRef = ref(db, `usuarios/${cedula}`);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setRegistro(data);
            } else {
                Alert.alert('No encontrado', 'No se encontró un registro con esa cédula');
                setRegistro(null);
            }
        });
    };

    // Función para cargar todos los registros
    useEffect(() => {
        const refUsuarios = ref(db, 'usuarios/');
        onValue(refUsuarios, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const listaRegistros = Object.keys(data).map((id) => ({
                    id,
                    ...data[id],
                }));
                setLista(listaRegistros);
            }
        });
    }, []);

    return (
        <ImageBackground
            source={require('../assets/images/A_vintage_styled_illustration_bw.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <Text style={styles.title}>Recordatorio</Text>

            {/* Primera sección: Buscar por cédula */}
            <TextInput
                placeholder="Ingresar cédula"
                style={styles.input}
                onChangeText={(texto) => setCedula(texto)}
                value={cedula}
            />
            <Text style={styles.button} onPress={buscarRegistro}>
                Buscar
            </Text>

            {registro && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Nombre: {registro.name}</Text>
                    <Text style={styles.resultText}>Fecha: {registro.date}</Text>
                    <Text style={styles.resultText}>Recordatorio: {registro.note}</Text>
                </View>
            )}

            <Text style={styles.subtitle}>Lista de Recordatorios</Text>
            <FlatList
                data={lista}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Informacion
                        informacion={item}
                        onPress={() =>
                            Alert.alert(
                                'Detalles',
                                `Nombre: ${item.name}\nFecha: ${item.date}\nNota: ${item.note}`
                            )
                        }
                    />
                )}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        fontSize: 18,
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#b8a398',
        paddingHorizontal: 15,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    button: {
        marginVertical: 15,
        backgroundColor: '#d9b382',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultContainer: {
        marginTop: 20,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 15,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    resultText: {
        fontSize: 18,
        marginVertical: 5,
    },
});
