import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import About from './Tabs/About';
import Stats from './Tabs/Stats';

import {PokemonStatsType, PokemonType} from '../../../../types/types';

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
  tabColor: string;
}

const Tab = createMaterialTopTabNavigator<MaterialTopTabParamList>();

const DescriptionTab: React.FC<DescriptionTabProps> = props => {
  const {pokemon, tabColor} = props;

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
        tabBarIndicatorStyle: {backgroundColor: tabColor},
        tabBarPressColor: '#0000000c',
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
