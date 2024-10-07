import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import SignInScreen from './authScreens/SignInScreen';

const ProfileScreen = ({ navigation }) => {
//   const { dispatchSignedIn } = useContext(SignInContext);

  // Function to handle sign out
//   const signOut = async () => {
//     try {
//       await auth().signOut();
//       dispatchSignedIn({ type: 'UPDATE_SIGN_IN', payload: { userToken: null } });
//     } catch (error) {
//       Alert.alert(error.code);
//     }
//   };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Avatar
          rounded
          size="large"
          source={{
            uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
          }}
          containerStyle={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Mark</Text>
          <Text style={styles.userEmail}>john@xpressfood.com</Text>
        </View>
      </View>

      {/* User Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>1</Text>
          <Text style={styles.statLabel}>Favorites</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Cart</Text>
        </View>
      </View>

      {/* Settings Options */}
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="credit-card-outline" type="material-community" color={colors.grey2} />
        <Text style={styles.menuText}>Payment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="tag-heart" type="material-community" color={colors.grey2} />
        <Text style={styles.menuText}>Promotions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="cog-outline" type="material-community" color={colors.grey2} />
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="lifebuoy" type="material-community" color={colors.grey2} />
        <Text style={styles.menuText}>Help</Text>
      </TouchableOpacity>

      {/* Dark Mode Toggle */}
      <View style={styles.preferences}>
        <Text style={styles.darkThemeText}>Dark Theme</Text>
        <Switch />
      </View>

      {/* Sign Out Button */}
      <Button
        title="Sign Out"
        icon={{ name: 'logout-variant', type: 'material-community', color: 'white' }}
        buttonStyle={styles.signOutButton}
        onPress={SignInScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pagebackground,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    borderWidth: 3,
    borderColor: colors.pagebackground,
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.black,
  },
  userEmail: {
    fontSize: 14,
    color: colors.grey2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  statLabel: {
    fontSize: 14,
    color: colors.grey2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey5,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color: colors.black,
  },
  preferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  darkThemeText: {
    fontSize: 16,
    color: colors.grey2,
    fontWeight: 'bold',
  },
  signOutButton: {
    backgroundColor: colors.buttons,
    marginTop: 20,
  },
});

export default ProfileScreen;
