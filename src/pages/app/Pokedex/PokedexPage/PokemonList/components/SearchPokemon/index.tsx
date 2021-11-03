import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {Container, TextInput} from './styles';

import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootStackParamList} from '../../../../../../../routes';

interface SearchPokemonProps {
  navigation: DrawerScreenProps<RootStackParamList, 'Pokedex'>['navigation'];
  value: string;
  setValue: (v: string) => void;
}

const SearchPokemon: React.FC<SearchPokemonProps> = props => {
  const {navigation, value, setValue} = props;

  return (
    <Container>
      <TextInput value={value} onChangeText={v => setValue(v)} />

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
