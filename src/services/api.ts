import axios from 'axios';

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
  return await api.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
};

export const getPokemonTypesApi = async () => {
  return await api.get<pokemonApiResourceResponse>(
    'https://pokeapi.co/api/v2/type',
  );
};

export default api;
