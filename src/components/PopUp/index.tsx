import * as React from 'react';
import { Modal } from 'react-native';
import {
  Container, DivPopUp, SubTitle, Title,
} from './styles';

type Props = {
  TextTitle: string;
  TextSubtitle: string;
  PopUpOn: boolean;
  FuncShowPopUp: () => void;
};

export default function PopUp({
  TextSubtitle, TextTitle, PopUpOn, FuncShowPopUp,
}: Props) {
  return (
    <Modal visible={PopUpOn} transparent>
      <Container onPress={FuncShowPopUp}>
        <DivPopUp>
          <Title>
            { TextTitle }
          </Title>
          <SubTitle>
            { TextSubtitle}
          </SubTitle>
        </DivPopUp>
      </Container>
    </Modal>

  );
}
