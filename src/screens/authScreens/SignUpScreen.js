import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, Image } from "react-native";
import { Icon, Button, SocialIcon } from "react-native-elements";
import { colors, parameters } from "../../global/styles";
import Header from '../../components/Header';

const { height, width } = Dimensions.get("window");

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const textInputRefs = {
    name: useRef(null),
    surname: useRef(null),
    phone: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
  };

  // Empty function for the Sign Up button
  const handleSignUp = () => {
    // Placeholder for Sign Up functionality
  };

  return (
    <View style={styles.container}>
      <Header title="Sign-Up" type="arrow-left" />

      <View style={styles.topContainer}>
        <Image
          source={require('F:/Delivery_App/deliver/src/global/Logos/Sign-In-logo.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.card}>
        {/* Name and Surname in the same row */}
        <View style={styles.nameSurnameContainer}>
          <TextInput
            style={styles.halfTextInput}
            placeholder="Name"
            ref={textInputRefs.name}
            value={name}
            onChangeText={(text) => setName(text)}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.halfTextInput}
            placeholder="Surname"
            ref={textInputRefs.surname}
            value={surname}
            onChangeText={(text) => setSurname(text)}
            autoCapitalize="words"
          />
        </View>

        {/* Phone Number Input */}
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          ref={textInputRefs.phone}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="phone-pad"
        />

        {/* Password Input */}
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          ref={textInputRefs.password}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        {/* Confirm Password Input */}
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          ref={textInputRefs.confirmPassword}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
        />

        {/* Sign Up Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={handleSignUp} // Empty function for now
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a0dad', // Purple background color
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
    width: width,
    position: 'absolute',
    bottom: 0,
  },
  nameSurnameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  halfTextInput: {
    width: '48%',
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 10,
    backgroundColor: '#f7f7f7',
  },
  textInput: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 10,
    backgroundColor: '#f7f7f7',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
});
