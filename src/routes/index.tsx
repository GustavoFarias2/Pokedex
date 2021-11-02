import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Pokedex from '../pages/app/Pokedex';
import Pokemon from '../pages/app/Pokemon';

export type RootStackParamList = {
  Pokedex: undefined;
  Pokemon: {
    pokemonName: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pokemon"
          component={Pokemon}
          options={{
            headerTitle: '',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
