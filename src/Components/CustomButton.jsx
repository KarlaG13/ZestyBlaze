import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ text, onPressed }) => {



  return (
    <TouchableOpacity style={styles.button} onPress={onPressed}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: '#3d405b',
    padding: 16,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height:50
  },
  text: {
    color: '#FFFFFF',
    fontSize: 17,
    textAlign: 'center',
    transition: 'padding-right 0.5s',
  },
});

export default CustomButton;
