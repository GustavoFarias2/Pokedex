import styled from 'styled-components/native';

export const Card = styled.View`
  height: 95px;
  width: 47.5%;
  margin-bottom: 45px;
  padding: 10px;
  border-radius: 20px;
  background-color: orange;
  justify-content: flex-end;
  align-items: center;
`;

export const PokemonImage = styled.Image`
  margin-bottom: 5px;
  z-index: 1;
  width: 100px;
  height: 100px;
`;

export const NameView = styled.View`
  width: 95%;
  background-color: #676767;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 25px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const Name = styled.Text`
  margin: 0;
  font-weight: 700;
  color: white;
`;
