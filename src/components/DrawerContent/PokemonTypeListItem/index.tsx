import React from 'react';

import {ListRenderItem, Text} from 'react-native';

import {FilterView} from './styles';

interface PokemonType {
  name: string;
}

const PokemonTypeListItem: ListRenderItem<PokemonType> = ({item}) => {
  return (
    <FilterView>
      <Text style={{color: 'white'}}>{item.name}</Text>
    </FilterView>
  );
};

export default PokemonTypeListItem;
