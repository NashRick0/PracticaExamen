import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Image
            source={{ uri: "https://i.pinimg.com/736x/b3/ab/36/b3ab364f2af0401648131700e7a6a371.jpg" }}
            style={styles.profileImage}
            />
            <Text style={styles.name}>Ricardo Luna U</Text>
            <Text style={styles.email}>ricardo_3141230014@utd.edu.mx</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 10,
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
    },
    email: {
      fontSize: 16,
      color: "gray",
    },
});