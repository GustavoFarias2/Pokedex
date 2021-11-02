import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import About from './Tabs/About';
import Stats from './Tabs/Stats';

import {PokemonStatsType, PokemonType} from '../../../../Types/types';

export type MaterialTopTabParamList = {
  About: {
    pokemon: PokemonType;
  };
  Stats: {
    pokemonStats: Array<PokemonStatsType>;
  };
};

interface DescriptionTabProps {
  pokemon: PokemonType;
}

const Tab = createMaterialTopTabNavigator<MaterialTopTabParamList>();

const DescriptionTab: React.FC<DescriptionTabProps> = ({pokemon}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 14,
        },
      }}>
      <Tab.Screen name="About" component={About} initialParams={{pokemon}} />
      <Tab.Screen
        name="Stats"
        component={Stats}
        initialParams={{pokemonStats: pokemon.stats}}
      />
    </Tab.Navigator>
  );
};

export default DescriptionTab;
