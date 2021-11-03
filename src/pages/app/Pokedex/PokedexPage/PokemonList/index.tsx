import React, {useState, useEffect, useCallback} from 'react';

import {useNavigation} from '@react-navigation/core';

import {useDispatch, useSelector} from 'react-redux';

import {addPokemons, setPokemons} from '../../../../../store/pokemons.store';
import {RootState} from '../../../../../store';

import api, {getPokemonsApi} from '../../../../../services/api';

import {ActivityIndicator} from 'react-native-paper';

import {PokemonFlatList} from './styles';

import PokemonListItem from './components/PokemonListItem';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../../routes';

const PokemonList: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, any>>();

  const dispatch = useDispatch();

  const pokemons = useSelector((store: RootState) => store.pokemons);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(true);

  const [nextUrl, setNextUrl] = useState<string | undefined>();

  const getPokemons = useCallback(async () => {
    const {
      data: {next, results},
    } = await getPokemonsApi();

    dispatch(setPokemons(results));

    setNextUrl(next);
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  const handleEndReached = async () => {
    if (nextUrl) {
      setLoadingMore(true);
      const {
        data: {next, results},
      } = await api.get(nextUrl);

      dispatch(addPokemons(results));

      setNextUrl(next);
      setLoadingMore(false);
    }
  };

  if (loading) {
    return <ActivityIndicator animating />;
  }

  return (
    <>
      <PokemonFlatList
        data={pokemons}
        renderItem={({item}) => (
          <PokemonListItem pokemon={item} navigation={navigation} />
        )}
        onEndReached={handleEndReached}
        ListFooterComponent={() =>
          loadingMore ? (
            <ActivityIndicator style={{marginBottom: 20}} animating />
          ) : (
            <></>
          )
        }
      />
    </>
  );
};

export default PokemonList;
