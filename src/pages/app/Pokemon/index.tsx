import React, {useState, useEffect, useCallback} from 'react';

import {ActivityIndicator} from 'react-native-paper';

import {getPokemonApi} from '../../../services/api';

import {Text} from 'react-native';

import {Container} from './styles';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes';
import {PokemonType} from '../../../Types/types';

const Pokemon: React.FC<NativeStackScreenProps<RootStackParamList, 'Pokemon'>> =
  props => {
    const {
      route: {
        params: {pokemonName},
      },
    } = props;

    const [loading, setLoading] = useState(true);

    const [pokemon, setPokemon] = useState<PokemonType | null>(null);

    const getPokemon = useCallback(async () => {
      const {data} = await getPokemonApi(pokemonName);

      setPokemon(data);

      setLoading(false);
    }, [pokemonName]);

    useEffect(() => {
      getPokemon();
    }, [getPokemon]);

    if (loading || !pokemon) {
      return (
        <Container>
          <ActivityIndicator animating />
        </Container>
      );
    }

    return (
      <Container>
        <Text>{pokemon.name}</Text>
      </Container>
    );
  };

export default Pokemon;
