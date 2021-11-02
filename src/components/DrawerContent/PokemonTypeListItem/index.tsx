import React from 'react';

import {Button} from 'react-native-paper';

import {ListRenderItem} from 'react-native';

interface PokemonType {
  name: string;
}

const PokemonTypeListItem: ListRenderItem<PokemonType> = ({item}) => {
  return <Button>{item.name}</Button>;
};

export default PokemonTypeListItem;
