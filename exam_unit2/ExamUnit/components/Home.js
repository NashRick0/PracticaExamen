import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const Home = ( {navigation} ) => {
    return (
    <View style={styles.container}>
        <View>
        <Text style={styles.text}>Examen Unidad II</Text>
        <Button
            title="Ir a Ahorros"
            onPress={() => navigation.navigate('Ahorros')}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
        />
        <Button
            title="Ir a Perfil"
            onPress={() => navigation.navigate('Perfil')}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
        />
        <Button
            title="Ir a Configuracion"
            onPress={() => navigation.navigate('Configuracion')}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
        />
        </View>
    </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ECF0F1",
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#2C3E50", 
    },
    buttonContainer: {
        width: 250, 
        marginVertical: 10, 
    },
    button: {
        backgroundColor: "#2C3E50", 
        borderRadius: 10,
        paddingVertical: 12, 
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
});