import React from 'react';

import {DrawerScreenProps} from '@react-navigation/drawer';

import {View, Text} from 'react-native';

import PokemonList from './PokemonList';

import {RootStackParamList} from '../../../../routes';

const Pokedex: React.FC<DrawerScreenProps<RootStackParamList, 'Pokedex'>> =
  () => {
    return (
      <View>
        <Text>Pokedex</Text>
        <PokemonList />
      </View>
    );
  };

export default Pokedex;
