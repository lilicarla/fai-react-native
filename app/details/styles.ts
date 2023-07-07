import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import appTheme from '@styles';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface IconProps {
  xAlign: 'left' | 'right';
}

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

export const InputRow = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#666666',
})`
  flex: 1;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #8E40EB;
  background-color: #FFFFFF;
  padding: 0 10px;
  margin-bottom: 20px;
  font-size: 14px;
  font-family: ${appTheme.fonts.regular};
`;

export const InputButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: #51E678;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const IconContainer = styled.TouchableOpacity<IconProps>`
  position: absolute;
  top: 10px;
  padding: 10px;
  ${(props) => props.xAlign}: 10px;
`;

export const StyledIcon = styled(MaterialIcons)`
  color: #292929;
  font-size: 24px;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})`
  width: 100%;
  height: 100%;
`;

export const ChipsContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 10px;
`;
