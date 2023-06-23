export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/image/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/image/pizzaIcon.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/image/pizzaIcon.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/image/pizzaIcon.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/image/pizzaIcon.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/image/pizzaIcon.png'),
    },

]


export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: `McDonald's Bintaro Sektor 9`,
            image: require('../assets/image/mcd.jpg'),
            description: 'Franchised fast food restaurant',
            lng: 106.713111,
            lat: -6.281097,
            address: '434 second street',
            stars: 5,
            reviews: '6.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Burger',
                   description: 'cheezy garlic burger',
                   price: 10,
                   image:  require('../assets/image/mcd-1.png')
                },
                {
                   id: 2,
                   name: `McDonald's combo meal`,
                   description: `McDonald's Chicken McNuggets Fizzy Drinks McDonald's Big Mac Hamburger Coca-Cola`,
                   price: 10,
                   image:  require('../assets/image/mcd-2.png')
                },
                {
                   id: 3,
                   name: 'French fries',
                   description: 'Original',
                   price: 10,
                   image:  require('../assets/image/mcd-3.png')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Papa',
            image: require('../assets/image/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/image/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/image/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/image/pizzaDish.png')
                },
            ]
    
        },
        {
            id: 3,
            name: 'Papa Johns',
            image: require('../assets/image/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/image/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/image/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/image/pizzaDish.png')
                },
            ]
    
        }
    ]
}
