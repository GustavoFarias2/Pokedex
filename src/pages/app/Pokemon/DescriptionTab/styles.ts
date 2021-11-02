import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 26,
    paddingTop: 20,
    paddingBottom: 10,
  },
})`
  flex: 1;
  background-color: white;
`;
