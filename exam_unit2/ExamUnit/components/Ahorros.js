import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Ahorros = () => {
    const navigation = useNavigation();
    const [counter, setCount] = React.useState(0);

    const increment = () => {
        setCount(counter + 10);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Contador: {counter}</Text>
            <View style={styles.iconContainer}>
                <Ionicons 
                    name='arrow-up-circle' 
                    size={50} 
                    color='green' 
                    onPress={increment} 
                    style={styles.icon} 
                />
                <Ionicons 
                    name='close-circle' 
                    size={50} 
                    color='red' 
                    onPress={reset} 
                    style={styles.icon} 
                />
            </View>
            <Button
                title="Volver a Home"
                onPress={() => navigation.goBack()}
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                containerStyle={styles.buttonContainer}
            />
        </View>
    );
};

export default Ahorros;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: "#ECF0F1",
        paddingHorizontal: 20,
    },
    counterText: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold',
        color: "#2C3E50",
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    icon: {
        padding: 10,
    },
    buttonContainer: {
        position: "absolute", 
        bottom: 20, 
        alignSelf: "center", 
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
