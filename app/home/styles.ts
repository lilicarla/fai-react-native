import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import appTheme from '@styles';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${appTheme.colors.white};
  `;

export const Background = styled.Image`
  width: ${width}px;
  height: ${height}px;
  position: absolute;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 50px;
  margin: 50px 0 30px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000;
  margin-bottom: 40px;
  font-family: ${appTheme.fonts.semiBold};
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px;
`;

export const InfoIcon = styled(MaterialIcons)`
  color: #292929;
  font-size: 24px;
`;
