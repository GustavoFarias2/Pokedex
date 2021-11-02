import axios from 'axios';

import {PokemonType} from '../types/types';

const api = axios.create();

export type pokemonApiResourceResponseItem = {
  name: string;
  url: string;
};

type pokemonApiResourceResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Array<pokemonApiResourceResponseItem>;
};

export const getPokemonsApi = async () => {
  return await api.get<pokemonApiResourceResponse>(
    'https://pokeapi.co/api/v2/pokemon',
  );
};

export const getPokemonApi = async (pokemonName: string) => {
  return await api.get<PokemonType>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );
};

export const getPokemonTypesApi = async () => {
  return await api.get<pokemonApiResourceResponse>(
    'https://pokeapi.co/api/v2/type',
  );
};

export default api;
