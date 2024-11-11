export const colors = {
    buttons: '#6a0dad', 
    grey1: '#43484d',
    grey2: '#5e6770',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    CardComment: '#86939e',
    cardbackground: '#f3e5f5', 
    statusbar: "#6a0dad", 
    headerText: "#E0E0E0",
};
export const COLOURS = {
   // base colors
   primary: "#C68FE6", // orange
   secondary: "#CDCDD2",   // gray

    // colors
    black: "#1E1F20",
    white: "#1F1F1F",
    
    purple: '#6a0dad',
    purple1: '#1230AE',
    purple2: '#292929',
    purple3: '#C68FE6',
    black: '#000000',
    lightGray: '#121212',
    accent: '#FFC231',
    accentRed: '#FB5D2E',
    accentPink: '#F96165',
    text: '#E0E0E0',
    text1: '#B3B3B3',
  };

export const parameters = {
    headerHeight: 50,

    styledButton: {
        backgroundColor: '#ffcc00',
        justifyContent: 'center-end',
        borderRadius: 10,
        marginVertical: 10,
        height: 50,
        paddingHorizontal: 50,
        width: "100%",
    },

    buttonTitle: {
        color: "#E0E0E0",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: -3,
    },
};

export const title = {
    buttons: '#6a0dad', 
    fontSize: 20,
    fontWeight: 'bold',
};

export const Categories = [
  {
    name: 'Meat',
    image: require('../global/samples/Meat_category.png'),
    items: [
      {
        id: '1', // Unique ID
        name: 'Kebabas',
        weight: 120,
        rating: '5.0',
        price: 17,
        isTopOfTheWeek: true,
        image: require('../assets/images/sushi.jpg'),
        images: [
          require('../assets/images/sushi.jpg'),
          require('../assets/images/sushi.jpg'),
        ],
        size: 'Large 8"',
        crust: 'Thick Crust',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '2', // Unique ID
        name: 'Classic BigMac Burger and Fries',
        weight: 120,
        rating: '5.0',
        price: 19,
        isTopOfTheWeek: true,
        image: require('../global/samples/Kebab.png'),
        size: 'Large 8"',
        crust: 'Thick Crust',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '3', // Unique ID
        name: 'Another very weirdly Classic Burger for people who want to eat more or less',
        weight: 120,
        rating: '5.0',
        price: 39,
        isTopOfTheWeek: true,
        image: require('../global/samples/Kebab.png'),
        size: 'Large 8"',
        crust: 'Thick Crust',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '4', // Unique ID
        name: 'Regular Burger',
        weight: 120,
        rating: '5.0',
        price: 20,
        isTopOfTheWeek: true,
        image: require('../global/samples/Kebab.png'),
        size: 'Large 8"',
        crust: 'Thick Crust',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '5', // Unique ID
        name: 'Classic Burger',
        weight: 120,
        rating: '5.0',
        price: 23,
        isTopOfTheWeek: true,
        image: require('../global/samples/Kebab.png'),
        size: 'Large 8"',
        crust: 'Thick Crust',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '6', // Unique ID
        name: 'Classic Burger6',
        weight: 120,
        rating: '5.0',
        price: 23,
        isTopOfTheWeek: true,
        image: require('../global/samples/Kebab.png'),
        size: 'Large 8"',
        crust: 'Thick Crust',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '7', // Unique ID
        name: 'Classic Burger7',
        weight: 120,
        rating: '5.0',
        price: 23,
        isTopOfTheWeek: true,
        image: require('../global/samples/Kebab.png'),
        size: 'Large 8"',
        crust: 'Thick Crust',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '8', // Unique ID
        name: 'Classic Burger8',
        weight: 120,
        rating: '5.0',
        price: 23,
        isTopOfTheWeek: true,
        image: require('../global/samples/Kebab.png'),
        size: 'Large 8"',
        crust: 'Thick Crust',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '9', // Unique ID
        name: 'Classic Burger99',
        weight: 120,
        rating: '5.0',
        price: 23,
        isTopOfTheWeek: true,
        image: require('../global/samples/Kebab.png'),
        size: 'Large 8"',
        crust: 'Thick Crust',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '10', // Unique ID
        name: 'Classic Burger10',
        weight: 120,
        rating: '5.0',
        price: 23,
        isTopOfTheWeek: true,
        image: require('../global/samples/Kebab.png'),
        size: 'Large 8"',
        crust: 'Thick Crust',
        delivery: 25,
        ingredients: [],
      },
    ],
  },
  {
    name: 'Pizza',
    image: require('../global/samples/Meat_category.png'),
    items: [
      {
        id: '11', // Unique ID
        name: 'Plain Cheese Pizza',
        weight: 120,
        rating: '4.5',
        price: 299,
        isTopOfTheWeek: false,
        image: require('../global/samples/Meat_category.png'),
        size: 'Large 16"',
        crust: 'Thin Cheese',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '12', // Unique ID
        name: 'Plain Fish Pizza',
        weight: 120,
        rating: '4.5',
        price: 299,
        isTopOfTheWeek: false,
        image: require('../global/samples/Meat_category.png'),
        size: 'Large 16"',
        crust: 'Thin Cheese',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '13', // Unique ID
        name: 'Plain Pepper Pizza',
        weight: 120,
        rating: '4.5',
        price: 299,
        isTopOfTheWeek: false,
        image: require('../global/samples/Meat_category.png'),
        size: 'Large 16"',
        crust: 'Thin Cheese',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '14', // Unique ID
        name: 'Plain Pizza',
        weight: 120,
        rating: '4.5',
        price: 299,
        isTopOfTheWeek: false,
        image: require('../global/samples/Meat_category.png'),
        size: 'Large 16"',
        crust: 'Thin Cheese',
        delivery: 25,
        ingredients: [],
      },
      {
        id: '15', // Unique ID
        name: 'Plain Tomato Pizza',
        weight: 120,
        rating: '4.5',
        price: 299,
        isTopOfTheWeek: false,
        image: require('../global/samples/Meat_category.png'),
        size: 'Large 16"',
        crust: 'Thin Cheese',
        delivery: 25,
        ingredients: [],
      },
    ],
  },
];
