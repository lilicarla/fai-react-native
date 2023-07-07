import React from 'react';
import { RoundedButton, PopUp } from '@components';
import { useRouter } from 'expo-router';
import {
  Container,
  Background,
  Content,
  Logo,
  Title,
  InfoIcon,
  IconContainer,
} from './styles';

const Home: React.FC = () => {
  const [showPopUp, setShowPopUp] = React.useState<boolean>(false);
  const router = useRouter();

  return (
    <Container>
      <Background
        source={{ uri: 'https://citi.org.br/wp-content/uploads/2021/09/Vector-573x1024.png' }}
      />
      <Content>
        <Logo
          source={{ uri: 'https://citi.org.br/wp-content/uploads/2021/09/image-66-1.png' }}
        />
        <Title>
          &lt;Desenvolvimento /&gt;
        </Title>
        <RoundedButton text="Web" onPress={() => router.push({ pathname: '/details', params: { title: 'Web' } })} />
        <RoundedButton text="Mobile" onPress={() => router.push({ pathname: '/details', params: { title: 'Mobile' } })} />
      </Content>
      <IconContainer onPress={() => { setShowPopUp(!showPopUp); }}>
        <InfoIcon name="info-outline" />
      </IconContainer>
      <PopUp
        TextTitle="<Desenvolvimento />"
        TextSubtitle="A área responsável por traduzir soluções em um software funcional que visa a resolução de problemas.
      Também responsável por entender a visão do produto, o caminho e a estratégia a ser trilhada."
        PopUpOn={showPopUp}
        FuncShowPopUp={() => { setShowPopUp(!showPopUp); }}
      />
    </Container>
  );
};

export default Home;
