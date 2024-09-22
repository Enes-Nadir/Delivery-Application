import React from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { COLOURS } from '../global/styles';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

const Details = ({ route, navigation }) => {
  // Destructure individual properties directly from route.params
  const {
    name,
    price,
    images = [], // Use a default empty array
    size,
    crust,
    delivery,
    ingredients,
    isTopOfTheWeek,
  } = route.params;

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: COLOURS.white }}>
      <Header title="Product Details" />

      {/* Image Slider */}
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        style={{ width, height: width }}
      >
        {images.map((img, index) => (
          <Image
            key={index}
            source={img} // Make sure this is in the correct format
            style={{ width, height: width, resizeMode: 'cover', backgroundColor: 'lightgrey' }} // Added background color for visibility
          />
        ))}
      </Animated.ScrollView>

      {/* Dots Indicator */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
        {images.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              width * (index - 1),
              width * index,
              width * (index + 1)
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: COLOURS.primary,
                marginHorizontal: 5,
                opacity
              }}
            />
          );
        })}
      </View>

      {/* Product Details */}
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLOURS.accent }}>₹{price}</Text>
        <Text style={{ fontSize: 16, marginVertical: 10 }}>Description about the product goes here...</Text>

        <TouchableOpacity
          style={{
            backgroundColor: COLOURS.primary,
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginVertical: 20,
          }}
          onPress={() => console.log('Order Placed')}
        >
          <Text style={{ fontSize: 18, color: COLOURS.white }}>Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Details;
