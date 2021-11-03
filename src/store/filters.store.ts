import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {pokemonApiResourceResponseItem} from '../services/api';

export type Filters = {
  filter: string;
  isActive: boolean;
};

const filters = createSlice({
  name: 'filters',
  initialState: <Filters[]>[],
  reducers: {
    setFilters: (
      _,
      {payload}: PayloadAction<pokemonApiResourceResponseItem[]>,
    ) => {
      const formattedTypes = payload.map(type => ({
        filter: type.name,
        isActive: false,
      }));

      formattedTypes.unshift({
        filter: 'all',
        isActive: true,
      });

      return formattedTypes;
    },

    toggleFilter: (state, {payload}: PayloadAction<string>) => {
      state.forEach(filter => {
        if (payload === 'all') {
          if (filter.filter === 'all') {
            filter.isActive = true;
          } else {
            filter.isActive = false;
          }
        } else {
          if (filter.filter === payload) {
            filter.isActive = !filter.isActive;
          } else if (filter.filter === 'all') {
            filter.isActive = false;
          }
        }
      });

      // Caso nenhum filtro seja selecionado aplicar filtro todos
      if (!state.find(filter => filter.isActive) && state[0]) {
        state[0].isActive = true;
      }
    },
  },
});

export const {setFilters, toggleFilter} = filters.actions;

export default filters.reducer;
