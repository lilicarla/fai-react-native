import styled from 'styled-components/native';
import appTheme from '@styles';

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: ${appTheme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #000000;
  font-family: ${appTheme.fonts.medium};
`;
