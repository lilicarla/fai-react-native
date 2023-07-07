import styled from 'styled-components/native';
import appTheme from '@styles';

export const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 20px;
  border-radius: 16px;
  background-color: #8E40EB;
`;

export const ChipText = styled.Text`
  font-size: 14px;
  color: ${appTheme.colors.white};
  font-family: ${appTheme.fonts.medium};
`;
