import {pokemonApiResourceResponseItem} from '../services/api';

type PokemonTypeType = {
  slot: number;
  type: pokemonApiResourceResponseItem;
};

type PokemonAbilityType = {
  ability: pokemonApiResourceResponseItem;
  is_hidden: boolean;
  slot: number;
};

export type PokemonStatsType = {
  base_stat: number;
  effort: number;
  stat: pokemonApiResourceResponseItem;
};

export type PokemonType = {
  name: string;
  id: number;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: Array<PokemonTypeType>;
  species: pokemonApiResourceResponseItem;
  height: number;
  abilities: Array<PokemonAbilityType>;
  gender: 'Male' | 'Fem';
  stats: Array<PokemonStatsType>;
};
