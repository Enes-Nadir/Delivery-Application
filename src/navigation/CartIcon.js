import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, PanResponder, StyleSheet, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../constants';

const { width, height } = Dimensions.get('window');

const TOP_MARGIN = height * 0.1;
const BOTTOM_MARGIN = height * 0.1;
const SIDE_MARGIN = 10;

const FloatingCartIcon = ({ cartCount = 0, onPress }) => {
  const pan = useRef(new Animated.ValueXY({ x: width - 70, y: TOP_MARGIN })).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [cartCount]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newX = Math.min(Math.max(pan.x._value + gestureState.dx, SIDE_MARGIN), width - 70 - SIDE_MARGIN);
        pan.setValue({ x: newX, y: TOP_MARGIN });
      },
      onPanResponderRelease: () => {
        const finalX = pan.x._value > width / 2 ? width - 70 - SIDE_MARGIN : SIDE_MARGIN;
        Animated.spring(pan, {
          toValue: { x: finalX, y: TOP_MARGIN },
          useNativeDriver: true,
          stiffness: 50,
          damping: 15,
          mass: 1,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.floatingCart,
        { transform: pan.getTranslateTransform(), opacity },
      ]}
      {...panResponder.panHandlers}
    >
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.cartContainer}>
          <AntDesign name="shoppingcart" size={35} color="purple" />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.badgeText}>{String(cartCount || 0)}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  floatingCart: {
    position: 'absolute',
    top: 100,
    zIndex: 1,
  },
  cartContainer: {
    backgroundColor: '#D3D3D3',
    borderRadius: 30,
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  cartBadge: {
    position: 'absolute',
    top: 5,
    left: -10,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FloatingCartIcon;
