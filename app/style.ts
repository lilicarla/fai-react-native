import { citi } from '@assets';
import styled from 'styled-components/native';

export const CitiLogo = styled(citi)``;

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;
