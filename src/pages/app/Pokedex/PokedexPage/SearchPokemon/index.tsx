import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {Container, TextInput} from './styles';

import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootStackParamList} from '../../../../../routes';

interface SearchPokemonProps {
  navigation: DrawerScreenProps<RootStackParamList, 'Pokedex'>['navigation'];
}

const SearchPokemon: React.FC<SearchPokemonProps> = props => {
  const {navigation} = props;

  return (
    <Container>
      <TextInput />

      <Icon
        name="options-outline"
        size={28}
        color="#5E5D5D"
        onPress={() => navigation.toggleDrawer()}
      />
    </Container>
  );
};

export default SearchPokemon;
