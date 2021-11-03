import styled from 'styled-components/native';

import {Chip} from 'react-native-paper';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 17px;
  flex-wrap: wrap;
`;

export const Filter = styled(Chip).attrs({
  textStyle: {
    color: 'black',
  },
})`
  margin-bottom: 8px;
  margin-right: 6px;
  background-color: #00000014;
`;
