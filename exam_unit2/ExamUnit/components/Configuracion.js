import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { List } from 'react-native-paper';

export default function Configuracion() {
    const handlePress = (setting) => {
        Alert.alert(`Has seleccionado: ${setting}`);
    };

    return (
        <View style={styles.container}>
            <List.Section>
                <List.Subheader>Configuración</List.Subheader>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });