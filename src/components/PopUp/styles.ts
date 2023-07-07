import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color:#000000aa;

  
`;

export const DivPopUp = styled.TouchableOpacity`
  position: absolute;
  width: 250px;
  height: 300px;
  left: 70px;
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
  margin: 16px 20px 0px 20px;
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
