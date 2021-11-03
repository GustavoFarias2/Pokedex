import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PokemonType} from './../Types/types';
import {Filters} from './filters.store';

const pokemons = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: <PokemonType[]>[],
    filteredPokemons: <PokemonType[]>[],
  },
  reducers: {
    setPokemons: (_, {payload}: PayloadAction<PokemonType[]>) => ({
      pokemons: payload,
      filteredPokemons: payload,
    }),

    addPokemons: (state, {payload}: PayloadAction<PokemonType[]>) => ({
      pokemons: [...state.pokemons, ...payload],
      filteredPokemons: [...state.filteredPokemons, ...payload],
    }),

    filterPokemons: (state, {payload}: PayloadAction<String[]>) => {
      if (payload[0] === 'all' || payload.length === 0) {
        return {
          pokemons: state.pokemons,
          filteredPokemons: state.pokemons,
        };
      }

      const filteredPokemons = state.pokemons.filter(pokemon => {
        const pokemonTypes = pokemon.types.map(type => type.type.name);

        if (pokemonTypes.some(type => payload.includes(type))) {
          return true;
        } else {
          return false;
        }
      });

      return {
        pokemons: state.pokemons,
        filteredPokemons,
      };
    },
  },
});

export const {setPokemons, addPokemons, filterPokemons} = pokemons.actions;

export default pokemons.reducer;
