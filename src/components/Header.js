import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, icon }) {
  const navigation = useNavigation(); 

  return (
    <View>
      {/* Set StatusBar Color */}
      <StatusBar backgroundColor="#6a0dad" barStyle="light-content" />
      <View style={styles.header}>
        {/* Render the icon if it's passed as a prop */}
        {icon && (
          <View style={styles.iconContainer}>
            <Icon
              type="material-community" // This is the icon family
              name={icon} // This should be a valid icon name, like "arrow-left"
              color="#fff"
              size={28}
              onPress={() => navigation.goBack()} // Handles back navigation
            />
          </View>
        )}
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#6a0dad', // Purple color
    height: 90, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'relative',
    paddingTop: 10,
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
