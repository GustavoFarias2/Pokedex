import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useDispatch} from 'react-redux';

import {loginUser} from '../../../store/auth.store';

import {Image} from 'react-native';

import {
  Container,
  Card,
  Title,
  Subtitle,
  TextInput,
  LoginButton,
} from './styles';

import api from '../../../services/api';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('12345');

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordPress = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginPress = async () => {
    try {
      const {data} = await api.post('https://reqres.in/api/login', {
        email,
        password,
      });

      dispatch(loginUser());

      AsyncStorage.setItem('@pokedex_user_token', data.token);
    } catch (e) {}
  };

  return (
    <>
      <Image
        style={{position: 'absolute', width: '100%'}}
        source={require('../../../assets/background.png')}
      />

      <Container>
        <Image source={require('../../../assets/pokemon_logo.png')} />

        <Card>
          <Title>Bem-vindo</Title>
          <Subtitle>Insira os seus dados para acessar</Subtitle>

          <TextInput
            label="email"
            value={email}
            onChangeText={v => setEmail(v)}
          />
          <TextInput
            label="password"
            value={password}
            onChangeText={v => setPassword(v)}
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                name={!showPassword ? 'eye' : 'eye-off'}
                onPress={handleShowPasswordPress}
              />
            }
          />

          <LoginButton onPress={handleLoginPress}>Login</LoginButton>
        </Card>
      </Container>
    </>
  );
};

export default Login;
