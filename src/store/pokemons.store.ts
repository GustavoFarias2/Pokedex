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
  },
});

export const {setPokemons} = pokemons.actions;

export default pokemons.reducer;
