import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../routes';

import DrawerContent from '../../../components/DrawerContent';

import PokedexPage from './PokedexPage';

const Drawer = createDrawerNavigator();

const Pokedex: React.FC<NativeStackScreenProps<RootStackParamList, 'Pokedex'>> =
  () => {
    return (
      <Drawer.Navigator
        drawerContent={({navigation}) => (
          <DrawerContent navigation={navigation} />
        )}
        screenOptions={{drawerPosition: 'right'}}>
        <Drawer.Screen
          name="PokedexPage"
          component={PokedexPage}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    );
  };

export default Pokedex;
