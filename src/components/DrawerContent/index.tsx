import React, {useState, useEffect} from 'react';

import {
  getPokemonTypesApi,
  pokemonApiResourceResponseItem,
} from '../../services/api';

import Icon from 'react-native-vector-icons/AntDesign';

import {ActivityIndicator, Button} from 'react-native-paper';

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
  const [loading, setLoading] = useState(true);

  const [types, setTypes] = useState<pokemonApiResourceResponseItem[]>([]);

  const getTypes = async () => {
    const {
      data: {results},
    } = await getPokemonTypesApi();

    setTypes(results);
    setLoading(false);
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <Container>
      <SpaceBetweenView>
        <TitleView>
          <Title>Filter</Title>

          <ClearFilter>Clear filter</ClearFilter>
        </TitleView>

        <Icon
          name="close"
          size={20}
          onPress={() => navigation.toggleDrawer()}
        />
      </SpaceBetweenView>

      <SubTitle>Tipo</SubTitle>

      {loading ? (
        <ActivityIndicator animating />
      ) : (
        <FilterFlatList data={types} renderItem={PokemonTypeListItem} />
      )}

      <ButtonView>
        <Button mode="contained" color="#2E6EB5" onPress={() => {}}>
          Aplicar
        </Button>
      </ButtonView>
    </Container>
  );
};

export default DrawerContent;
