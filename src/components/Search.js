import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Modal,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { COLOURS, Categories } from '../global/styles';
import Header from './Header';

const windowWidth = Dimensions.get('window').width;

export default function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      const allItems = Categories.reduce((acc, category) => {
        return [...acc, ...category.items];
      }, []);
      const sortedItems = allItems.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredItems(sortedItems);
    }
  }, [searchQuery]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === '') {
      const allItems = Categories.reduce((acc, category) => {
        return [...acc, ...category.items];
      }, []);
      const sortedItems = allItems.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredItems(sortedItems);
    } else {
      const matchedItems = Categories.reduce((acc, category) => {
        const items = category.items.filter(
          (item) =>
            item.name.toLowerCase().includes(text.toLowerCase()) ||
            (item.description &&
              item.description.toLowerCase().includes(text.toLowerCase()))
        );
        return [...acc, ...items];
      }, []);
      setFilteredItems(matchedItems);
    }
  };

  const renderItems = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        width: windowWidth * 0.42,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: windowWidth * 0.02,
        marginBottom: 20,
      }}
    >
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
        }}
      >
        <View style={{ alignItems: 'center' }}>
          {item.isTopOfTheWeek && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome
                name="crown"
                style={{ fontSize: 7, color: COLOURS.purple1 }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: COLOURS.text,
                  opacity: 0.8,
                  marginLeft: 5,
                }}
              >
                Top of the week
              </Text>
            </View>
          )}
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.text,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {item.name.length > 22
              ? item.name.substring(0, 20) + '...'
              : item.name}
          </Text>
        </View>
        <View style={{ width: 80, height: 80, marginVertical: 10 }}>
          <Image
            source={item.image}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.text,
            opacity: 0.5,
          }}
        >
          {item.weight} €
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: 10,
          }}
        >
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
          >
            <Entypo name="plus" style={{ fontSize: 18, color: COLOURS.white }} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign
              name="star"
              style={{ fontSize: 12, color: COLOURS.text, paddingRight: 5 }}
            />
            <Text
              style={{
                fontSize: 15,
                color: COLOURS.text,
                fontWeight: 'bold',
              }}
            >
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {/* Search Bar on Home Screen */}
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons
          name="search"
          style={{ fontSize: 20, color: "#888", opacity: 0.8 }}
        />
        <TextInput
          editable={false}
          placeholder="Search..."
          placeholderTextColor="#888"
          style={styles.searchTextInput}
        />
      </TouchableOpacity>

      {/* Modal for search functionality */}
      <Modal
        animationType="fade"
        transparent={false}
        style={styles.modal}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Updated Header Title */}
        <View style={styles.modalContainer}>
          <View style={styles.modalSearchBarContainer}>
            
            <View style={styles.searchBar}>
            {/* Back Button in Modal */}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" style={styles.backIcon} />
            </TouchableOpacity>

              <Ionicons
                name="search"
                style={{ fontSize: 20, color: "#888", opacity: 0.8 }}
              />
              <TextInput
                placeholder="Search..."
                placeholderTextColor="#888"
                style={styles.searchTextInputInModal}
                value={searchQuery}
                onChangeText={handleSearch}
                autoFocus={true}
              />
            </View>
          </View>
          <View style={styles.flatList}>
            <FlatList
              key={2}
              data={filteredItems}
              renderItem={renderItems}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.grid}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              ListEmptyComponent={
                searchQuery.length > 0 ? (
                  <Text style={styles.noResultsText}>No results found</Text>
                ) : null
              }
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOURS.purple2,
    borderRadius: 20,
    paddingHorizontal: 20,
    width: '85%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
  searchTextInput: {
    color: COLOURS.text,
    fontSize: 16,
    paddingVertical: 5,
    marginLeft: 10,
    flex: 1,
  },
  modal: {
    backgroundColor: COLOURS.grey,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLOURS.lightGray,
  },
  modalSearchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    justifyContent: 'center',
  },
  searchBarInModal: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDE8DC',
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    width: '75%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
  searchTextInputInModal: {
    color: COLOURS.text,
    fontSize: 16,
    paddingVertical: 5,
    marginLeft: 10,
    flex: 1,
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    fontSize: 25,
    color: "#888",
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  noResultsText: {
    color: COLOURS.black,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  flatList: {
    flex: 1,
    alignItems: 'center',
  },
});
