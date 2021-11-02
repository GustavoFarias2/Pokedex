import React from 'react';

import {DrawerScreenProps} from '@react-navigation/drawer';

import {Button} from 'react-native-paper';
import {View, Text} from 'react-native';

import {RootStackParamList} from '../../../../routes';

const Pokedex: React.FC<DrawerScreenProps<RootStackParamList, 'Pokedex'>> =
  props => {
    const {navigation} = props;

    const handleGoToPokemon = () => navigation.navigate('Pokemon');

    return (
      <View>
        <Text>Pokedex</Text>
        <Button onPress={handleGoToPokemon}>go to pokemon</Button>
      </View>
    );
  };

export default Pokedex;
