import React, {useState, useEffect, useCallback} from 'react';

import {useNavigation} from '@react-navigation/core';

import {useDispatch, useSelector} from 'react-redux';

import {addPokemons, setPokemons} from '../../../../../store/pokemons.store';
import {RootState} from '../../../../../store';

import api, {getPokemonApi, getPokemonsApi} from '../../../../../services/api';

import {ActivityIndicator} from 'react-native-paper';

import {PokemonFlatList} from './styles';

import SearchPokemon from './components/SearchPokemon';
import PokemonListItem from './components/PokemonListItem';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootStackParamList} from '../../../../../routes';
import {PokemonType} from '../../../../../Types/types';
import useFilterPokemons from '../../../../../functions/useFilterPokemons';

interface PokemonListProps {
  drawerNavigation: DrawerScreenProps<
    RootStackParamList,
    'Pokedex'
  >['navigation'];
}

const PokemonList: React.FC<PokemonListProps> = ({drawerNavigation}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, any>>();

  const dispatch = useDispatch();

  const {pokemons, filters} = useSelector((store: RootState) => ({
    pokemons: store.pokemons.filteredPokemons,
    filters: store.filters,
  }));

  // const [searchedPokemons, setSearchedPokemons] =
  //   useState<PokemonType[]>(pokemons);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(true);

  const [nextUrl, setNextUrl] = useState<string | undefined>();

  const [search, setSearch] = useState('');

  const getPokemons = useCallback(async () => {
    const {
      data: {next, results},
    } = await getPokemonsApi();

    let pokemonsWithInfo = [];

    for await (let pokemon of results) {
      const {data} = await getPokemonApi(pokemon.name);

      pokemonsWithInfo.push(data);
    }

    dispatch(setPokemons(pokemonsWithInfo));

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

      let pokemonsWithInfo = [];

      for await (let pokemon of results) {
        const {data} = await getPokemonApi(pokemon.name);

        pokemonsWithInfo.push(data);
      }

      dispatch(addPokemons(pokemonsWithInfo));

      useFilterPokemons(dispatch, filters);

      setNextUrl(next);
      setLoadingMore(false);
    }
  };

  const handleChangeSearch = (v: string) => {
    // const newSearchedPokemons = pokemons.filter(pokemon =>
    //   pokemon.name.includes(v),
    // );

    setSearch(v);
    // setSearchedPokemons(newSearchedPokemons);
  };

  if (loading) {
    return <ActivityIndicator animating />;
  }

  return (
    <>
      <SearchPokemon
        navigation={drawerNavigation}
        value={search}
        setValue={v => handleChangeSearch(v)}
      />

      <PokemonFlatList
        data={pokemons}
        renderItem={({item}) => (
          <PokemonListItem pokemon={item} navigation={navigation} />
        )}
        keyExtractor={(_, i) => String(i)}
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
