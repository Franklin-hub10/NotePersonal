import { Alert, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, remove } from 'firebase/database';
import { db } from '../config/Config';

export default function EditarNote() {


  const [cedula, setcedula] = useState('')

  function eliminar() {

    remove(ref(db, 'usuarios/' + cedula),);
    Alert.alert('Mensaje', 'Elemento eliminado')
  }
    // Función para buscar un registro por cédula
    const buscarRegistro = () => {
        if (!cedula) {
            Alert.alert('Error', 'Por favor ingresa una cédula');
            return;
        }

  return (
    <ImageBackground
      source={require('../assets/images/A_vintage_styled_illustration_bw.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.title}>Recordatorio</Text>


      <TextInput
        placeholder="Ingresar cédula"
        style={styles.input}
        onChangeText={(texto) => setcedula(texto)}
        value={cedula}
      />
      <Text style={styles.button} onPress={buscarRegistro}>
        Buscar
      </Text>



    </ImageBackground>
  );
}
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