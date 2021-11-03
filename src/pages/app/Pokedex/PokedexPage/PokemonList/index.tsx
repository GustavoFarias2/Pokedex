import React, {useState, useEffect, useCallback} from 'react';

import {useNavigation} from '@react-navigation/core';

import {useDispatch, useSelector} from 'react-redux';

import {setPokemons} from '../../../../../store/pokemons.store';
import {RootState} from '../../../../../store';

import {getPokemonsApi} from '../../../../../services/api';

import {ActivityIndicator} from 'react-native-paper';

import {PokemonFlatList} from './styles';

import PokemonListItem from './components/PokemonListItem';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../../routes';

const PokemonList: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, any>>();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const pokemons = useSelector((store: RootState) => store.pokemons);

  const getPokemons = useCallback(async () => {
    const {
      data: {results},
    } = await getPokemonsApi();

    dispatch(setPokemons(results));

    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

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
