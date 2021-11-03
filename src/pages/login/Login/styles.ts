import styled from 'styled-components/native';

import {Button, TextInput as PaperTextInput} from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

export const Card = styled.View`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: black;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: black;
  margin-bottom: 30px;
`;

export const TextInput = styled(PaperTextInput)`
  background-color: #3333330f;
  margin-bottom: 24px;
  height: 60px;
`;

export const LoginButton = styled(Button).attrs({
  mode: 'contained',
  color: '#2E6EB5',
  contentStyle: {
    height: '100%',
  },
})`
  height: 56px;
  justify-content: center;
`;
