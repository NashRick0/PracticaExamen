import React from 'react';

import Home from './components/Home';
import Perfil from './components/Perfil';
import Ahorros from './components/Ahorros';
import Configuracion from './components/Configuracion';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Ahorros" component={Ahorros} />
        <Stack.Screen name="Configuracion" component={Configuracion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
