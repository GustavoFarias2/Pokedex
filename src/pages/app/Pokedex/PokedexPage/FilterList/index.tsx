import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {toggleFilter} from '../../../../../store/filters.store';
import {RootState} from '../../../../../store';

import {Container, Filter} from './styles';

const FilterList: React.FC = () => {
  const dispatch = useDispatch();

  const filters = useSelector((store: RootState) => store.filters);

  const handleFilterPress = (filter: string) => {
    dispatch(toggleFilter(filter));
  };

  return (
    <Container>
      {filters.map(
        (filter, i) =>
          filter.isActive && (
            <Filter
              key={i}
              onClose={
                filter.filter !== 'all'
                  ? () => handleFilterPress(filter.filter)
                  : undefined
              }>
              {filter.filter}
            </Filter>
          ),
      )}
    </Container>
  );
};

export default FilterList;
