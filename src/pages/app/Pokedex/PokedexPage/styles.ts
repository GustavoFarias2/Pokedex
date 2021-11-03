import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

export const Container = styled.View`
  margin: 30px;
  margin-top: 18px;
  justify-content: center;
`;

export const PokemonLogo = styled.Image`
  height: 41px;
  width: 120px;
  left: ${Math.round(Dimensions.get('window').width / 2) + 'px'};
  margin-bottom: 24px;
`;
