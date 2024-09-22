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
import Header from '../components/Header';

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
            currentSelected == index ? COLOURS.purple2 : COLOURS.white,
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
                currentSelected == index ? COLOURS.white : COLOURS.purple3,
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
                    color: COLOURS.purple1,
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
              textAlign: 'center', 
            }}>
            {item.name.length > 22 ? item.name.substring(0, 20) + '...' : item.name}
          </Text>
          </View>
  
          {/* Image Section */}
          <View style={{ width: 80, height: 80, marginVertical: 10 }}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain', 
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
              justifyContent: 'space-between', 
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: 10, 
            }}>
            {/* Plus Sign */}
            <TouchableOpacity
              style={{
                width: 40,
                height: 30,
                backgroundColor: COLOURS.purple3,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                // Handle add to cart action here
                console.log('Add to cart action');
              }}>
              <Entypo name="plus" style={{ fontSize: 18, color: COLOURS.white }} />
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
        backgroundColor: COLOURS.purple,
      }}>
      
      {/* <Header title="Bring" /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white,
          }}>
           {/* Search Bar Wrapper */}
           <View
            style={{
              width: '100%',
              alignItems: 'center', 
              marginVertical: 20, 
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#EDE8DC', 
                borderRadius: 20, 
                paddingHorizontal: 20, 
                width: '75%',
                }}>
              <Ionicons
                name="search"
                style={{ fontSize: 20, color: COLOURS.black, opacity: 0.8 }}
              />
              <TextInput
                placeholder="Search..."
                placeholderTextColor="#888" 
                style={{
                  color: COLOURS.black,
                  fontSize: 16,
                  paddingVertical: 5,
                  marginLeft: 10,
                  flex: 1,
                }}
              />
            </View>
          </View>
          {/* Categories Section */}
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
