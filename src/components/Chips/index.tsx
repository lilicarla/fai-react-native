import React from 'react';

import { Container, ChipText } from './styles';

interface ChipProps {
  text: string;
  onPress?: () => void;
}

const Chip: React.FC<ChipProps> = ({ text, onPress }) => (
  <Container onPress={onPress}>
    <ChipText>{text}</ChipText>
  </Container>
);

export default Chip;

Chip.defaultProps = {
  onPress: () => null,
};
