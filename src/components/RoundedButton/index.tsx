import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonText } from './styles';

interface RoundedButtonProps {
  text: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    shadowColor: '#88888',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
});

const RoundedButton: React.FC<RoundedButtonProps> = ({ text, onPress }) => (
  <Button onPress={onPress} style={styles.button}>
    <ButtonText>{text}</ButtonText>
  </Button>
);

export default RoundedButton;
