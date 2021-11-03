import React, {useState, useEffect, useCallback} from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {getPokemonApi} from '../../../../../../../services/api';

import {useLinearGradient} from '../../../../../../../functions/useLinearGradient';

import {TouchableWithoutFeedback} from 'react-native';

import {Card, PokemonImage, Name, NameView} from './styles';

import {RootStackParamList} from '../../../../../../../routes';
import {PokemonType} from '../../../../../../../types/types';

interface ListRenderItemItemProps {
  pokemon: {
    name: string;
  };
  navigation: NativeStackNavigationProp<RootStackParamList, any>;
}

const PokemonListItem: React.FC<ListRenderItemItemProps> = props => {
  const {pokemon, navigation} = props;

  const [fetchedPokemon, setFetchedPokemon] = useState<PokemonType>();

  const getPokemonImage = useCallback(async () => {
    const {data} = await getPokemonApi(pokemon.name);

    setFetchedPokemon(data);
  }, [pokemon.name]);

  useEffect(() => {
    getPokemonImage();
  }, [getPokemonImage]);

  const handleGoToPokemon = () =>
    navigation.navigate('Pokemon', {pokemonName: pokemon.name});

  const colors = useLinearGradient(fetchedPokemon?.types);

  return (
    <TouchableWithoutFeedback onPress={handleGoToPokemon}>
      <Card colors={colors}>
        <PokemonImage
          source={{uri: fetchedPokemon?.sprites.other.home.front_default}}
        />
        <NameView>
          <Name>{pokemon.name}</Name>
        </NameView>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default PokemonListItem;
