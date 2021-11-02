import React from 'react';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {Container} from '../../styles';

import {MaterialTopTabParamList} from '../..';
import DescriptionItem from '../DescriptionItem';

const About: React.FC<
  MaterialTopTabScreenProps<MaterialTopTabParamList, 'About'>
> = props => {
  const {
    route: {
      params: {pokemon},
    },
  } = props;

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Container>
      <DescriptionItem title="Specie" value={pokemon.species.name} />

      <DescriptionItem title="Height" value={`${pokemon.height}ft`} />

      <DescriptionItem
        title="Abilities"
        value={pokemon.abilities.reduce(
          (acc, ability, i) =>
            (acc += `${capitalizeFirstLetter(ability.ability.name)}${
              i !== pokemon.abilities.length - 1 && ', '
            }`),
          '',
        )}
      />

      <DescriptionItem
        title="Gender"
        value={Math.round(Math.random()) === 0 ? 'Male' : 'Fem'}
      />
    </Container>
  );
};

export default About;
