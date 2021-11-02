import React from 'react';

import {DrawerScreenProps} from '@react-navigation/drawer';

import {Container, PokemonLogo} from './styles';

import PokemonList from './PokemonList';

import {RootStackParamList} from '../../../../routes';

const Pokedex: React.FC<DrawerScreenProps<RootStackParamList, 'Pokedex'>> =
  () => {
    return (
      <Container>
        <PokemonLogo source={require('../../../../assets/pokemon_logo.png')} />
        <PokemonList />
      </Container>
    );
  };

export default Pokedex;
