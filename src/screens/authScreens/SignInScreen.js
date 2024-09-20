import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, Image, Alert } from "react-native";
import { Icon, Button, SocialIcon } from "react-native-elements";
import { colors, parameters } from "../../global/styles";
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native'; 

const { height, width } = Dimensions.get("window");

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const textInput1 = useRef(null);
  const navigation = useNavigation();

  const handleContinueWithEmail = () => {
    if (email.trim() === "") {
      Alert.alert("Error", "Please enter your email address.");
    } else {
      navigation.navigate('HomeScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Sign-In" />

      <View style={styles.topContainer}>
        <Image
          source={require('F:/Delivery_App/deliver/src/global/Logos/Sign-In-logo.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.card}>
        {/* Email Input */}
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          ref={textInput1}
          value={email}
          inputMode="email"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Continue with Email Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Continue with Email"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={handleContinueWithEmail} // Updated with validation
          />
        </View>

        {/* Divider */}
        <Text style={styles.dividerText}>Or</Text>

        {/* Social Icons */}
        <View style={styles.socialContainer}>
          <SocialIcon
            button
            type="google"
            style={styles.socialIcon}
            onPress={() => {}}
          />
          <SocialIcon
            button
            type="apple"
            style={styles.socialIcon}
            onPress={() => {}}
          />
          <SocialIcon
            button
            type="facebook"
            style={styles.socialIcon}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a0dad', 
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
  dividerText: {
    marginVertical: 10,
    color: '#86939e',
    fontWeight: 'bold',
    fontSize: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  socialIcon: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginHorizontal: 15,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  signUpText: {
    color: '#86939e',
  },
  signUpLink: {
    color: '#6a0dad',
    fontWeight: 'bold',
  },
});
