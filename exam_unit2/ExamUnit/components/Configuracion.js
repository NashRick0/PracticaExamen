import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { List } from 'react-native-paper';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Configuracion() {
    const navigation = useNavigation();

    const handlePress = (setting) => {
        Alert.alert(`Has seleccionado: ${setting}`);
    };

    return (
        <View style={styles.container}>

            <List.Section>
                <List.Subheader>
                    <Text>Opciones</Text>
                </List.Subheader>
                <List.Item
                    title="Perfil"
                    description="Ver y editar perfil"
                    left={() => <List.Icon icon="account" />}
                    onPress={() => handlePress('Perfil')}
                />
                <List.Item
                    title="Cuenta"
                    description="Ver y editar cuenta"
                    left={() => <List.Icon icon="account-settings" />}
                    onPress={() => handlePress('Cuenta')}
                />
                <List.Item
                    title="Notificaciones"
                    description="Configurar notificaciones"
                    left={() => <List.Icon icon="bell" />}
                    onPress={() => handlePress('Notificaciones')}
                />
            </List.Section>
            <View style={styles.buttonWrapper}>
                <Button
                    title="Volver a Home"
                    onPress={() => navigation.goBack('Home')}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    containerStyle={styles.buttonContainer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECF0F1",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#2C3E50",
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 20,
    },
    buttonContainer: {
        width: 250,
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
