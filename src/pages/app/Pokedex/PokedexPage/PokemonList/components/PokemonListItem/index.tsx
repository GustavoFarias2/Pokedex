import React from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useLinearGradient} from '../../../../../../../functions/useLinearGradient';

import {TouchableWithoutFeedback} from 'react-native';

import {Card, PokemonImage, Name, NameView} from './styles';

import {RootStackParamList} from '../../../../../../../routes';
import {PokemonType} from '../../../../../../../types/types';

interface ListRenderItemItemProps {
  pokemon: PokemonType;
  navigation: NativeStackNavigationProp<RootStackParamList, any>;
}

const PokemonListItem: React.FC<ListRenderItemItemProps> = props => {
  const {pokemon, navigation} = props;

  const handleGoToPokemon = () =>
    navigation.navigate('Pokemon', {pokemonName: pokemon.name});

  const colors = useLinearGradient(pokemon.types);

  return (
    <TouchableWithoutFeedback onPress={handleGoToPokemon}>
      <Card colors={colors}>
        <PokemonImage
          source={{uri: pokemon.sprites.other.home.front_default}}
        />
        <NameView>
          <Name>{pokemon.name}</Name>
        </NameView>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default PokemonListItem;
