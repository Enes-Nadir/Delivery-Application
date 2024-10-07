import React, { useState } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, Animated, StyleSheet, FlatList } from 'react-native';
import { COLOURS } from '../global/styles';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

const Details = ({ route, navigation }) => {
  const {
    name,
    price,
    images = [], 
    size,
    crust,
    delivery,
    ingredients,
    isTopOfTheWeek,
  } = route.params;


  const [activeIndex, setActiveIndex] = useState(0);
  // Useless stuff remove it later

  const carouselData = [
    {
      id: "01",
      image: require("../assets/images/baked-fries.jpg")
    },
    {
      id: "02",
      image: require("../assets/images/ice-kacang.jpg")
    },
    {
      id: "03",
      image: require("../assets/images/kek-lapis.jpg")
    }
  ]
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const screenWidth = Dimensions.get("window").width;

  //Rendering Item
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ height: 300, width: screenWidth}}
          />
      </View>
    )
  }

  //Handle Scroll
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = scrollPosition /screenWidth;
    setActiveIndex(index);
  };

  //Render Dot Indicator
  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {

    if (activeIndex === index) {
      return (
        <View
        style={{
          backgroundColor:"purple",
          height:10,
          width: 10,
          borderRadius: 5,
          marginHorizontal: 6,
        }}
        ></View>
      )
    }

      return(
        <View
        style={{
          backgroundColor: "grey",
          height: 10,
          width: 10,
          borderRadius: 5,
          marginHorizontal: 6,
        }}> 
      </View>
      )
    })
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLOURS.white }}>
      <Header title="Product Details" />



      {/* Image Slider */}
      <View style={{ width, height: 300 }}>

      <FlatList data={carouselData} 
      renderItem={renderItem} 
      keyExtractor={(item)=>item.id}
      horizontal={true} 
      pagingEnabled={true} 
      onScroll={handleScroll}
      showsHorizontalScrollIndicator={false}
      />

      <View  style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
      {renderDotIndicators()}
      </View>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: COLOURS.purple, marginBottom: 10 }}>{price} €</Text>
      </View>

      {/* Product Details */}
      <ScrollView style={{ paddingHorizontal: 20, marginBottom: 10 }}>

        <Text style={{ fontSize: 16, marginVertical: 10 }}>Description about the product goes here...Description about the product goes here...
        Description about the product goes here...Description about the product goes here...Description about the product goes here...Description about the product goes here...
        Description about the product goes here...Description about the product goes here...Description about the product goes here...Description about the product goes here...
        Description about the product goes here...Description about the product goes here...Description about the product goes here...Description about the product goes here...
        Description about the product goes here...Description about the product goes here...Description about the product goes here...Description about the product goes here...
        Description about the product goes here...Description about the product goes here...Description about the product goes here...Description about the product goes here...
        Description about the product goes here...Description about the product goes here...Description about the product goes here...Description about the product goes here...
        Description about the product goes here...Description about the product goes here...Description about the product goes here...Description about the product goes here...
        Description about the product goes here...Description about the product goes here...Description about the product goes here...Description about the product goes here...

        </Text>
      </ScrollView>

      

      {/* Button fixed to the bottom */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Order Placed')}
        >
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: width,
    height: width,
    resizeMode: 'cover',
    backgroundColor: 'lightgrey',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLOURS.primary,
    marginHorizontal: 5,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,  // Ensures space for scrolling under the button
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 20, // Button will be 20px from the bottom of the screen
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,  // Ensures the button is on top of everything
  },
  button: {
    backgroundColor: 'rgb(106, 27, 154)',  // Semi-transparent purple background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOURS.white,
  },
});



export default Details;
