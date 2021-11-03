import {configureStore} from '@reduxjs/toolkit';

import pokemonsReducer from './pokemons.store';
import filtersReducer from './filters.store';
import authReducer from './auth.store';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
