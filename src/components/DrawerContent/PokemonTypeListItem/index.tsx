import React from 'react';

import {TouchableWithoutFeedback} from 'react-native';
import {Filters} from '../../../store/filters.store';

import {FilterView, FilterText} from './styles';

interface PokemonTypeListItemProps {
  filter: Filters;
  handleFilterPress: () => void;
}

const PokemonTypeListItem: React.FC<PokemonTypeListItemProps> = props => {
  const {filter, handleFilterPress} = props;

  return (
    <TouchableWithoutFeedback onPress={handleFilterPress}>
      <FilterView isActive={filter.isActive}>
        <FilterText isActive={filter.isActive}>{filter.filter}</FilterText>
      </FilterView>
    </TouchableWithoutFeedback>
  );
};

export default PokemonTypeListItem;
