import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, type }) {
  const navigation = useNavigation(); 

  return (
    <View>
      {/* Set StatusBar Color */}
      <StatusBar backgroundColor="#6a0dad" barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon
            type="material-community" // This is the icon family
            name="arrow-left" // This should be a valid icon name
            color="#fff"
            size={28}
            onPress={() => navigation.goBack()} 
          />
        </View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#6a0dad', // Purple color
    height: 60, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    left: 20, 
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
