import React, {useState, useCallback, useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useDispatch, useSelector} from 'react-redux';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {loginUser} from '../store/auth.store';
import {RootState} from '../store';

import {ActivityIndicator} from 'react-native-paper';

import {LoadingContainer} from './styles';

import Pokedex from '../pages/app/Pokedex';
import Pokemon from '../pages/app/Pokemon';
import Login from '../pages/login/Login';

export type RootStackParamList = {
  Pokedex: undefined;
  Pokemon: {
    pokemonName: string;
  };
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  const dispatch = useDispatch();

  const {token} = useSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState(true);

  const checkIfIsLogged = useCallback(async () => {
    const tokenInStorage = await AsyncStorage.getItem('@pokedex_user_token');

    if (tokenInStorage) {
      dispatch(loginUser());
    }

    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    checkIfIsLogged();
  }, [checkIfIsLogged]);

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator animating />
      </LoadingContainer>
    );
  }

  if (!token) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pokemon"
          component={Pokemon}
          options={{
            headerTitle: '',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
