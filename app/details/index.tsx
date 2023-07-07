import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Chip, PopUp } from '@components';
import {
  Container,
  Background,
  Content,
  Logo,
  Title,
  StyledIcon,
  IconContainer,
  Input,
  InputButton,
  InputRow,
  ChipsContainer,
  ScrollContainer,
} from './styles';

const Details: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { title } = params;

  const [showPopUp, setShowPopUp] = React.useState<boolean>(false);
  const [input, setInput] = React.useState<string>('');
  const [chips, setChips] = React.useState<string[]>([]);

  const handleAddChip = () => {
    if (input) {
      setChips([...chips, input]);
      setInput('');
    }
  };

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
          Desenvolvimento
          {' '}
          {title}
        </Title>
        <InputRow>
          <Input placeholder="O que você quer aprender?" onChangeText={(text) => setInput(text)} value={input} />
          <InputButton onPress={() => handleAddChip()}>
            <StyledIcon name="add" />
          </InputButton>
        </InputRow>
        <ScrollContainer>
          <ChipsContainer>
            {chips.map((chip, index) => (
              <Chip
                key={`${index.toString()}: ${chip}`}
                text={chip}
                onPress={() => { console.log(`${index.toString()}: ${chip}`); }}
              />
            ))}
          </ChipsContainer>
        </ScrollContainer>
      </Content>
      <IconContainer xAlign="left" onPress={() => router.back()}>
        <StyledIcon name="chevron-left" />
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

export default Details;
