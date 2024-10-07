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
    headerText: "white",
};
export const COLOURS = {
   // base colors
   primary: "#6a0dad", // orange
   secondary: "#CDCDD2",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    
    purple: '#6a0dad',
    purple1: '#1230AE',
    purple2: '#C68FE6',
    purple3: '#C68FE6',
    black: '#000000',
    lightGray: '#B3B4B6',
    accent: '#FFC231',
    accentRed: '#FB5D2E',
    accentPink: '#F96165',
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
        color: "#000",
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
          name: 'Kebabas',
          weight: 120,
          rating: '5.0',
          price: 17,
          isTopOfTheWeek: true,
          image: require('../assets/images/sushi.jpg'),
          images: [
          require('../assets/images/sushi.jpg'),
          require('../assets/images/sushi.jpg')
          ],
          size: 'Large 8"',
          crust: 'Thick Crust',
          delivery: 25,
          ingredients: [
            // require(''),
          ],
        },
        {
          name: 'Classic BigMac Burger and Fries',
          weight: 120,
          rating: '5.0',
          price: 19,
          isTopOfTheWeek: true,
          image: require('../global/samples/Kebab.png'),
          size: 'Large 8"',
          crust: 'Thick Crust',
          delivery: 25,
          ingredients: [
            // require(''),
          ],
        },
        {
          name: 'Another very wierdly Classic Burger',
          weight: 120,
          rating: '5.0',
          price: 39,
          isTopOfTheWeek: true,
          image: require('../global/samples/Kebab.png'),
          size: 'Large 8"',
          crust: 'Thick Crust',
          delivery: 25,
          ingredients: [
            // require(''),
          ],
        },
        {
          name: 'Regular Burger',
          price: 20,
          rating: '5.0',
          price: 199,
          isTopOfTheWeek: true,
          image: require('../global/samples/Kebab.png'),
          size: 'Large 8"',
          crust: 'Thick Crust',
          delivery: 25,
          ingredients: [
            // require(''),
          ],
        },
        {
          name: 'Classic Burger',
          price: 23,
          rating: '5.0',
          price: 199,
          isTopOfTheWeek: true,
          image: require('../global/samples/Kebab.png'),
          size: 'Large 8"',
          crust: 'Thick Crust',
          delivery: 25,
          ingredients: [
            // require(''),
          ],
        },
      ],
    },
    {
      name: 'Pizza',
      image: require('../global/samples/Meat_category.png'),
      items: [
        {
          name: 'Plain Cheese Pizza',
          price: 300,
          rating: '4.5',
          price: 299,
          isTopOfTheWeek: false,
          image: require('../global/samples/Meat_category.png'),
          size: 'Large 16"',
          crust: 'Thin Cheese',
          delivery: 25,
          ingredients: [
            // require(''),
          ],
        },
        {
          name: 'Plain Cheese Pizza',
          price: 300,
          rating: '4.5',
          price: 299,
          isTopOfTheWeek: false,
          image: require('../global/samples/Meat_category.png'),
          size: 'Large 16"',
          crust: 'Thin Cheese',
          delivery: 25,
          ingredients: [
            // require(''),
          ],
        },
        {
          name: 'Plain Cheese Pizza',
          price: 300,
          rating: '4.5',
          price: 299,
          isTopOfTheWeek: false,
          image: require('../global/samples/Meat_category.png'),
          size: 'Large 16"',
          crust: 'Thin Cheese',
          delivery: 25,
          ingredients: [
            // require(''),
          ],
        },
      ],
    },
  ];