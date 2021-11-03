import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getPokemonTypesApi} from '../../services/api';

import Icon from 'react-native-vector-icons/AntDesign';

import {ActivityIndicator, Button} from 'react-native-paper';

import {RootState} from '../../store';
import {setFilters, toggleFilter} from '../../store/filters.store';

import {
  Container,
  TitleView,
  ClearFilter,
  Title,
  SubTitle,
  FilterFlatList,
  ButtonView,
  SpaceBetweenView,
} from './styles';

import PokemonTypeListItem from './PokemonTypeListItem';

import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';

interface DrawerContentProps {
  navigation: DrawerNavigationHelpers;
}

const DrawerContent: React.FC<DrawerContentProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const {filters} = useSelector((store: RootState) => store);

  const getTypes = useCallback(async () => {
    if (loading) {
      const {
        data: {results},
      } = await getPokemonTypesApi();

      dispatch(setFilters(results));
      setLoading(false);
    }
  }, [dispatch, loading]);

  useEffect(() => {
    getTypes();
  }, [getTypes]);

  const handleClearFilterPress = () => {
    dispatch(toggleFilter('all'));
  };

  const handleFilterPress = useCallback(
    (filter: string) => {
      dispatch(toggleFilter(filter));
    },
    [dispatch],
  );

  const closeDrawer = () => navigation.toggleDrawer();

  return (
    <Container>
      <SpaceBetweenView>
        <TitleView>
          <Title>Filter</Title>

          {!loading && !filters[0].isActive && (
            <ClearFilter onPress={handleClearFilterPress}>
              Clear filter
            </ClearFilter>
          )}
        </TitleView>

        <Icon name="close" size={20} onPress={closeDrawer} />
      </SpaceBetweenView>

      <SubTitle>Tipo</SubTitle>

      {loading ? (
        <ActivityIndicator animating />
      ) : (
        <FilterFlatList
          data={filters}
          renderItem={({item}) => (
            <PokemonTypeListItem
              filter={item}
              handleFilterPress={() => handleFilterPress(item.filter)}
            />
          )}
        />
      )}

      <ButtonView>
        <Button mode="contained" color="#2E6EB5" onPress={closeDrawer}>
          Aplicar
        </Button>
      </ButtonView>
    </Container>
  );
};

export default DrawerContent;
