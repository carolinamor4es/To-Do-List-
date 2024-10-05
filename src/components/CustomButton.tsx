import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type CustomButtonProps = {
  onPress: () => void;
  text: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 280,
    height: 60,
    backgroundColor: '#F4AEC1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default CustomButton;