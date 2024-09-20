import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { Categories, COLOURS } from '../global/styles';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({ navigation }) => {
  const [currentSelected, setCurrentSelected] = useState([0]);

  const renderCategories = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}>
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor:
              currentSelected == index ? COLOURS.accent : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}>
          <View style={{ width: 60, height: 60 }}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'center',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: '600',
            }}>
            {item.name}
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor:
                currentSelected == index ? COLOURS.white : COLOURS.accentRed,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="angle-right"
              style={{
                fontSize: 12,
                color: currentSelected == index ? COLOURS.black : COLOURS.white,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItems = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{
          width: 180,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10, 
          marginBottom:20,
        }}
        onPress={() =>
          navigation.push('details', {
            name: item.name,
            price: item.price,
            image: item.image,
            size: item.size,
            crust: item.crust,
            delivery: item.delivery,
            ingredients: item.ingredients,
            isTopOfTheWeek: item.isTopOfTheWeek,
          })
        }>
        <View
          style={{
            width: '100%',
            height: 200,
            backgroundColor: COLOURS.white,
            borderRadius: 20,
            elevation: 4,
            position: 'relative',
            padding: 10,
            justifyContent: 'space-between',
            alignItems: 'center', 
          }}>
          {/* Top of the Week Section */}
          <View style={{ alignItems: 'center' }}>
            {item.isTopOfTheWeek && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FontAwesome
                  name="crown"
                  style={{
                    fontSize: 7,
                    color: COLOURS.accent,
                  }}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: COLOURS.black,
                    opacity: 0.8,
                    marginLeft: 5,
                  }}>
                  top of the week
                </Text>
              </View>
            )}
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.black,
                fontWeight: 'bold',
                paddingTop: 2,
                textAlign: 'center', // Center align text
              }}>
              {item.name}
            </Text>

          </View>
  
          {/* Image Section */}
          <View style={{ width: 80, height: 80, marginVertical: 10 }}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain', // Ensure the image fits within the container
              }}
            />
          </View>
          <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              {item.weight}
            </Text>
  
          {/* Bottom Section */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between', // Space between plus and rating
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: 10, // Add padding to match the container
            }}>
            {/* Plus Sign */}
            <TouchableOpacity
              style={{
                width: 40,
                height: 30,
                backgroundColor: COLOURS.accent,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                // Handle add to cart action here
                console.log('Add to cart action');
              }}>
              <Entypo name="plus" style={{ fontSize: 18, color: COLOURS.black }} />
            </TouchableOpacity>
  
            {/* Rating Section */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AntDesign
                name="star"
                style={{ fontSize: 12, color: COLOURS.black, paddingRight: 5 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: COLOURS.black,
                  fontWeight: 'bold',
                }}>
                {item.rating}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  

  // Get items for a specific category by name
  const getItemsByCategory = (categoryName) => {
    const category = Categories.find((cat) => cat.name === categoryName);
    return category ? category.items : [];
  };


  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white,
            position: 'relative',
          }}>
          <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
              }}>
              <Image
                // source={require('../database/images/profile.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                  borderRadius: 500,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Material
                name="segment"
                style={{
                  fontSize: 28,
                  color: COLOURS.black,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 20 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                opacity: 0.5,
                fontWeight: '400',
              }}>
              Food
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: COLOURS.black,
                fontWeight: '600',
                letterSpacing: 2,
              }}>
              Delivery
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons
              name="search"
              style={{ fontSize: 20, color: COLOURS.black, opacity: 0.8 }}
            />
            <TextInput
              placeholder="Search..."
              style={{
                color: COLOURS.black,
                fontSize: 16,
                paddingVertical: 5,
                borderBottomWidth: 1,
                borderBottomColor: COLOURS.black + 20,
                width: '90%',
                marginLeft: 10,
                letterSpacing: 1,
              }}
            />
          </View>
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLOURS.black,
              letterSpacing: 1,
            }}>
            Categories
          </Text>
          <FlatList
            horizontal={true}
            data={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
         {/* First FlatList for Meat category */}
         <Text
            style={{
              paddingHorizontal: 20,
              marginVertical: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLOURS.black,
            }}>
            Popular
          </Text>
          <FlatList
            horizontal={true}
            data={getItemsByCategory('Meat')}
            renderItem={renderItems}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}
            style={{ marginBottom: 20 }}
            keyExtractor={(item, index) => index.toString()}
          />
          {/* Second FlatList for Pizza category */}
          <Text
            style={{
              paddingHorizontal: 20,
              marginVertical: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLOURS.black,
            }}>
            Pizza
          </Text>
          <FlatList
            horizontal={true}
            data={getItemsByCategory('Pizza')}
            renderItem={renderItems}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}
            style={{ marginBottom: 20 }}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity
            style={{
              margin: 30,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.5,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                borderBottomWidth: 1,
                borderBottomColor: COLOURS.black,
              }}>
              Load more
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
