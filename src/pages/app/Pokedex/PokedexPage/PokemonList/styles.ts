import styled from 'styled-components/native';

import {FlatList} from 'react-native';

export const PokemonFlatList = styled.FlatList.attrs({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: 60,
  },
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;
