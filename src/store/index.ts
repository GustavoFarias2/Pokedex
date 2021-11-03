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
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 2000, ignoredPaths: ['pokemons']},
      serializableCheck: {warnAfter: 2000, ignoredPaths: ['pokemons']},
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
