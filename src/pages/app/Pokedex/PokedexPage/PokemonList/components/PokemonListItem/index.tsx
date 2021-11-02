import React, {useState, useEffect, useCallback} from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {getPokemonApi} from '../../../../../../../services/api';

import {TouchableWithoutFeedback} from 'react-native';

import {Card, PokemonImage, Name, NameView} from './styles';

import {RootStackParamList} from '../../../../../../../routes';

interface ListRenderItemItemProps {
  pokemon: {
    name: string;
  };
  navigation: NativeStackNavigationProp<RootStackParamList, any>;
}

const PokemonListItem: React.FC<ListRenderItemItemProps> = props => {
  const {pokemon, navigation} = props;

  const [pokemonImage, setPokemonImage] = useState<string>();

  const getPokemonImage = useCallback(async () => {
    const {data} = await getPokemonApi(pokemon.name);

    setPokemonImage(data.sprites.other.home.front_default);
  }, [pokemon.name]);

  useEffect(() => {
    getPokemonImage();
  }, [getPokemonImage]);

  const handleGoToPokemon = () =>
    navigation.navigate('Pokemon', {pokemonName: pokemon.name});

  return (
    <TouchableWithoutFeedback onPress={handleGoToPokemon}>
      <Card>
        <PokemonImage source={{uri: pokemonImage}} />
        <NameView>
          <Name>{pokemon.name}</Name>
        </NameView>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default PokemonListItem;
