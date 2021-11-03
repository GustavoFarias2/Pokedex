import {Dispatch} from 'react';
import {useDispatch} from 'react-redux';
import {Filters} from '../store/filters.store';
import {filterPokemons} from '../store/pokemons.store';

const useFilterPokemons = (
  dispatch: Dispatch<any>,
  filters: Filters[],
  toggledFilter: string,
) => {
  if (toggledFilter === 'all') {
    dispatch(filterPokemons(['all']));

    return null;
  }

  const activeFilters = filters.filter(filter => {
    if (
      filter.filter !== 'all' &&
      ((filter.isActive && filter.filter !== toggledFilter) ||
        (!filter.isActive && filter.filter === toggledFilter))
    ) {
      return true;
    } else {
      return false;
    }
  });

  const activeFiltersName = activeFilters.map(filter => filter.filter);

  dispatch(filterPokemons(activeFiltersName));
};

export default useFilterPokemons;
