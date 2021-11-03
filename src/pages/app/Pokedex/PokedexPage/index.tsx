import React from 'react';

import {DrawerScreenProps} from '@react-navigation/drawer';

import {Container, PokemonLogo} from './styles';

import PokemonList from './PokemonList';

import SearchPokemon from './SearchPokemon';
import FilterList from './FilterList';

import {RootStackParamList} from '../../../../routes';

const Pokedex: React.FC<DrawerScreenProps<RootStackParamList, 'Pokedex'>> =
  props => {
    const {navigation} = props;

    return (
      <Container>
        <PokemonLogo source={require('../../../../assets/pokemon_logo.png')} />
        <SearchPokemon navigation={navigation} />
        <FilterList />
        <PokemonList />
      </Container>
    );
  };

export default Pokedex;
