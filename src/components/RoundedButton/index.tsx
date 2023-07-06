import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface RoundedButtonProps {
  text: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#88888',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
});

const RoundedButton: React.FC<RoundedButtonProps> = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.9}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default RoundedButton;
