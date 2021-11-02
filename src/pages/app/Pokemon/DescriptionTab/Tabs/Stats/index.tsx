import React from 'react';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {Container} from '../../styles';

import {MaterialTopTabParamList} from '../..';
import DescriptionItem from '../DescriptionItem';

const Stats: React.FC<
  MaterialTopTabScreenProps<MaterialTopTabParamList, 'Stats'>
> = props => {
  const {
    route: {
      params: {pokemonStats},
    },
  } = props;

  return (
    <Container>
      {pokemonStats.map((stat, i) => (
        <DescriptionItem
          key={i}
          title={stat.stat.name}
          value={String(stat.base_stat)}
        />
      ))}
    </Container>
  );
};

export default Stats;
