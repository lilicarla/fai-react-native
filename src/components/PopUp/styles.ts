import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const leftOffset = (width - 300) / 2;

export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color:#000000aa;
`;

export const DivPopUp = styled.TouchableOpacity`
  position: absolute;
  width: 300px;
  height: 260px;
  left: ${leftOffset}px;
  top: 220px;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: bold;
  text-align: center;
  font-size: 23px;
  margin: 0 20px 0 20px;
  color: #000000;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 17px;
  margin: 16px 27px 0px 27px;
  line-height: 19px;
  text-align: center;
  color: gray;
`;
