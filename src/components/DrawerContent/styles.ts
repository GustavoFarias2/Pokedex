import styled from 'styled-components/native';

import {FlatList} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 23px;
  padding-top: 18px;
`;

export const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SpaceBetweenView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 41px;
  align-items: center;
`;

export const ClearFilter = styled.Text`
  font-size: 12px;
  font-weight: 500;
  text-decoration: underline;
  color: #4a7dff;
  margin-top: 7px;
`;

export const Title = styled.Text`
  margin-right: 11px;
  font-size: 24px;
  font-weight: 700;
  color: #3f3f3f;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #3f3f3f;
  margin-bottom: 23px;
`;

export const FilterFlatList = styled.FlatList.attrs({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;

export const ButtonView = styled.View`
  margin-top: 18px;
  justify-content: flex-end;
`;
