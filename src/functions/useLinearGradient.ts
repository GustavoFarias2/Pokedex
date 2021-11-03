import {PokemonTypeType} from '../types/types';

export const useLinearGradient = (types: PokemonTypeType[] | undefined) => {
  if (!types || types === undefined) {
    return ['#7CC0FF', '#7CFFD0'];
  }

  if (types[0].type.name === 'grass') {
    return ['#7CFFD0', '#4A7B42'];
  } else if (types[0].type.name === 'fire') {
    return ['#FF6969', '#FD9E5A'];
  } else if (types[0].type.name === 'water') {
    return ['#7CC0FF', '#5F29FF'];
  } else {
    return ['#7CC0FF', '#7CFFD0'];
  }
};
