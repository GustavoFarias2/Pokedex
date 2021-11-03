import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {pokemonApiResourceResponseItem} from '../services/api';

const pokemons = createSlice({
  name: 'pokemons',
  initialState: <pokemonApiResourceResponseItem[]>[],
  reducers: {
    setPokemons: (
      _,
      {payload}: PayloadAction<pokemonApiResourceResponseItem[]>,
    ) => payload,

    addPokemons: (
      state,
      {payload}: PayloadAction<pokemonApiResourceResponseItem[]>,
    ) => [...state, ...payload],
  },
});

export const {setPokemons, addPokemons} = pokemons.actions;

export default pokemons.reducer;
