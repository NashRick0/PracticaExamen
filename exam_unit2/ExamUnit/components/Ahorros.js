import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Ahorros = () => {
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
        </View>
    );
};

export default Ahorros;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 32,
        marginBottom: 20,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    icon: {
        padding: 10,
    }
});