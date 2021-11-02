import React, {useState, useEffect} from 'react';

import {
  getPokemonTypesApi,
  pokemonApiResourceResponseItem,
} from '../../services/api';

import {FlatList} from 'react-native-gesture-handler';
import {ActivityIndicator, Button} from 'react-native-paper';
import {Text} from 'react-native';

import PokemonTypeListItem from './PokemonTypeListItem';

const DrawerContent: React.FC = () => {
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
    <>
      <Text>Filtro</Text>

      <Text>Tipo</Text>

      {loading ? (
        <ActivityIndicator animating />
      ) : (
        <FlatList
          numColumns={2}
          data={types}
          renderItem={PokemonTypeListItem}
        />
      )}

      <Button>Aplicar</Button>
    </>
  );
};

export default DrawerContent;
