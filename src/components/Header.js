import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, type }) {
  const navigation = useNavigation(); 

  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <Icon
          type="material-community"
          name={type} 
          color={colors.headerText}
          size={28}
          onPress={() => navigation.goBack()} 
        />
      </View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    alignItems: "center",
    justifyContent: "center", 
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    left: 20, 
  },
  headerText: {
    color: colors.headerText,
    fontSize: 24,
    fontWeight: "bold",
  },
});
