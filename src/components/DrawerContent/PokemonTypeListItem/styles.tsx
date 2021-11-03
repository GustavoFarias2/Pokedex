import styled from 'styled-components/native';

interface FilterComponentProps {
  isActive: boolean;
}

export const FilterView = styled.View<FilterComponentProps>`
  width: 48%;
  padding: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({isActive}) => (isActive ? '#2e6eb5' : '#D8D8D8')};
`;

export const FilterText = styled.Text<FilterComponentProps>`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
  color: ${({isActive}) => (isActive ? '#FFFFFF' : '#6B6060')};
`;
