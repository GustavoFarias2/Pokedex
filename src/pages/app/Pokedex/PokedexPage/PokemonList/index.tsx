import React, {useState, useEffect} from 'react';

import {useNavigation} from '@react-navigation/core';

import {
  getPokemonsApi,
  pokemonApiResourceResponseItem,
} from '../../../../../services/api';

import {ActivityIndicator} from 'react-native-paper';

import {PokemonFlatList} from './styles';

import PokemonListItem from './components/PokemonListItem';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../../routes';

const PokemonList: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, any>>();

  const [loading, setLoading] = useState(true);

  const [pokemons, setPokemons] = useState<pokemonApiResourceResponseItem[]>(
    [],
  );

  const getPokemons = async () => {
    const {
      data: {results},
    } = await getPokemonsApi();

    setPokemons(results);
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  if (loading) {
    return <ActivityIndicator animating />;
  }

  return (
    <PokemonFlatList
      data={pokemons}
      renderItem={({item}) => (
        <PokemonListItem pokemon={item} navigation={navigation} />
      )}
    />
  );
};

export default PokemonList;
