import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOURS } from '../global/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header';

const CartScreen = ({ navigation, route }) => {
  const [cartItems, setCartItems] = useState(route.params?.cartItems || []);
  const updateCartItems = route.params?.updateCartItems;
  const [deliveryFee, setDeliveryFee] = useState(5);
  const [totalPrice, setTotalPrice] = useState(calculateTotal(cartItems));

  useEffect(() => {
    if (updateCartItems) {
      updateCartItems(cartItems);
    }
  }, [cartItems, updateCartItems]);

  function calculateTotal(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0) + deliveryFee;
  }

  const updateQuantity = (index, action) => {
    let updatedItems = [...cartItems];
    if (action === 'add') {
      updatedItems[index].quantity++;
    } else if (action === 'remove') {
      if (updatedItems[index].quantity > 1) {
        updatedItems[index].quantity--;
      } else {
        updatedItems.splice(index, 1); // Remove item if quantity reaches 0
      }
    }
    setCartItems(updatedItems);
    setTotalPrice(calculateTotal(updatedItems));
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.cartItem}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.price}>{`€${item.price * item.quantity}`}</Text>
      </View>
      <View style={styles.quantityControl}>
        <TouchableOpacity onPress={() => updateQuantity(index, 'remove')}>
          <AntDesign name="minus" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(index, 'add')}>
          <AntDesign name="plus" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Cart" icon="arrow-left" />
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.summary}>
        <Text style={styles.price}>Delivery Fee: €{deliveryFee}</Text>
        <Text style={styles.price}>Total: €{totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLOURS.lightGray },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOURS.text,
    flexWrap: 'wrap',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: COLOURS.text,
  },
  quantity: {
    fontSize: 16,
    color: COLOURS.text,
    marginHorizontal: 10,
  },
  price: {
    fontSize: 16,
    color: COLOURS.text,
  },
  summary: {
    padding: 20,
    backgroundColor: COLOURS.white,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default CartScreen;
