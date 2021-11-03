import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {DrawerScreenProps} from '@react-navigation/drawer';

import {Container, PokemonLogo} from './styles';

import PokemonList from './PokemonList';

import FilterList from './FilterList';

import {RootStackParamList} from '../../../../routes';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {logout} from '../../../../store/auth.store';

const Pokedex: React.FC<DrawerScreenProps<RootStackParamList, 'Pokedex'>> = ({
  navigation,
}) => {
  const dispatch = useDispatch();

  const handleLogoPress = async () => {
    await AsyncStorage.removeItem('@pokedex_user_token');

    dispatch(logout());
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleLogoPress}>
        <PokemonLogo
          style={[{}, [{transform: [{translateX: -94}]}]]}
          source={require('../../../../assets/pokemon_logo.png')}
        />
      </TouchableOpacity>
      <FilterList />
      <PokemonList drawerNavigation={navigation} />
    </Container>
  );
};

export default Pokedex;
