import styled from 'styled-components/native';

export const DescriptionView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DescriptionTitleView = styled.View`
  flex: 3;
  text-align: left;
`;

export const DescriptionTitle = styled.Text`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 30px;
  color: #9a9a9a;
  text-transform: capitalize;
`;

export const DescriptionValueView = styled.View`
  flex: 4;
  text-align: left;
`;

export const DescriptionValue = styled.Text`
  text-align: left;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: #5e5e5e;
  text-transform: capitalize;
`;
