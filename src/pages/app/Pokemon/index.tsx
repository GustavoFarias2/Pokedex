import React, {useState, useEffect, useCallback} from 'react';

import {ActivityIndicator} from 'react-native-paper';

import {getPokemonApi} from '../../../services/api';

import {
  Container,
  PaddingContainer,
  TitleView,
  Title,
  TypesView,
  Type,
  ImageContainer,
  PokemonImage,
} from './styles';

import DescriptionTab from './DescriptionTab';

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
        <PaddingContainer>
          <TitleView>
            <Title>{pokemon.name}</Title>

            <Title>
              #{'000'.substring(String(pokemon.id).length) + pokemon.id}
            </Title>
          </TitleView>

          <TypesView>
            {pokemon.types.map((type, i) => (
              <Type key={i}>{type.type.name}</Type>
            ))}
          </TypesView>

          <ImageContainer>
            <PokemonImage
              source={{uri: pokemon.sprites.other.home.front_default}}
            />
          </ImageContainer>
        </PaddingContainer>

        <DescriptionTab pokemon={pokemon} />
      </Container>
    );
  };

export default Pokemon;
