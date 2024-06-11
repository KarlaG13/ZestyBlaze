import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomCheckbox = () => {
  return (
    <View style={styles.rejectCheckbox}>
      <View style={styles.checkboxWrapper}>
        <TouchableOpacity style={styles.touchable}>
          <LinearGradient
            colors={['#4158d0', '#c850c0', '#ffcc70']}
            style={styles.label}
          >
            <View style={styles.checkedCircle} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rejectCheckbox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxWrapper: {
    marginBottom: 8,
    alignItems: 'center',
  },
  touchable: {
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  label: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }],
  },
});

export default CustomCheckbox;
