import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DeleteButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Delete</Text>
      <View style={styles.icon}>
        <Icon name="delete" size={24} color="#eee" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#e62222',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 35,
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: 40,
    height: 40,
    borderLeftWidth: 1,
    borderLeftColor: '#c41b1b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DeleteButton;
