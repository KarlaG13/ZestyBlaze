import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import Svg, { Path, Polygon } from 'react-native-svg';

const Heart = () => {
  const [checked, setChecked] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const celebrateOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (checked) {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();

      Animated.timing(celebrateOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(celebrateOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [checked]);

  const handlePress = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity style={styles.heartContainer} onPress={handlePress}>
      <View style={styles.svgContainer}>
        <Svg viewBox="0 0 24 24" style={styles.svgOutline}>
          <Path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
        </Svg>
        {checked && (
          <>
            <Animated.View style={[styles.svgFilled, { transform: [{ scale: scaleValue }] }]}>
              <Svg viewBox="0 0 24 24">
                <Path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
              </Svg>
            </Animated.View>
            <Animated.View style={[styles.svgCelebrate, { opacity: celebrateOpacity }]}>
              <Svg width="100" height="100">
                <Polygon points="10,10 20,20" />
                <Polygon points="10,50 20,50" />
                <Polygon points="20,80 30,70" />
                <Polygon points="90,10 80,20" />
                <Polygon points="90,50 80,50" />
                <Polygon points="80,80 70,70" />
              </Svg>
            </Animated.View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heartContainer: {
    position: 'relative',
    width: 50,
    height: 50,
  },
  svgContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgOutline: {
    position: 'absolute',
    fill: 'rgb(0, 0, 0)',
    width:30,
    height:30
  },
  svgFilled: {
    position: 'absolute',
    fill: 'rgb(255, 91, 137)',
  },
  svgCelebrate: {
    position: 'absolute',
    stroke: 'rgb(255, 91, 137)',
    fill: 'rgb(255, 91, 137)',
    strokeWidth: 2,
  },
});

export default Heart;
