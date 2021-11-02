import React from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Button} from 'react-native-paper';

import {RootStackParamList} from '../../../../../../../routes';

interface ListRenderItemItemProps {
  pokemon: {
    name: string;
  };
  navigation: NativeStackNavigationProp<RootStackParamList, any>;
}

const PokemonListItem: React.FC<ListRenderItemItemProps> = props => {
  const {pokemon, navigation} = props;

  const handleGoToPokemon = () =>
    navigation.navigate('Pokemon', {pokemonName: pokemon.name});

  return <Button onPress={handleGoToPokemon}>{pokemon.name}</Button>;
};

export default PokemonListItem;
