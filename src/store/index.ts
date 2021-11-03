import {configureStore} from '@reduxjs/toolkit';

import pokemonsReducer from './pokemons.store';
import filtersReducer from './filters.store';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
