import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import {Chip} from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const PaddingContainer = styled.View`
  padding: 26px;
  padding-bottom: 19px;
  padding-top: 0px;
`;

export const TitleView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 24px;
  color: #3f3f3f;
`;

export const TypesView = styled.View`
  flex-direction: row;
`;

export const Type = styled(Chip)`
  margin-right: 11px;
`;

export const ImageContainer = styled(LinearGradient).attrs({
  useAngle: true,
  angle: 45,
})`
  margin-top: 74px;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  background-color: orange;
`;

export const PokemonImage = styled.Image`
  position: absolute;
  left: 50%;
  width: 254px;
  height: 254px;
`;
