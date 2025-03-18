const ourCoffee = {
    state: {
        ourcoffee: [
            {
                id: 0,
                title: 'Solimo Coffee Beans 2kg',
                price: 10.73,
                img: 'coffee-1.jpg',
            },
            {
                id: 1,
                title: 'Presto Coffee Beans 1kg',
                price: 15.99,
                img: 'coffee-2.jpg',
            },
            {
                id: 2,
                title: ' AROMISTICO Coffee 1kg',
                price: 6.99,
                img: 'coffee-3.jpg',
            },
            {
                id: 3,
                title: 'Solimo Coffee Beans 2kg',
                price: 10.73,
                img: 'coffee-3.jpg',
            },
            {
                id: 4,
                title: 'Solimo Coffee Beans 2kg',
                price: 10.73,
                img: 'coffee-3.jpg',
            },
            {
                id: 5,
                title: ' AROMISTICO Coffee 1kg',
                price: 10.73,
                img: 'coffee-3.jpg',
            },
        ],
    },
    getters: {
        getOurCoffeeItems(state) {
            return state.ourcoffee
        },
        getProductById(state) { 
            return (id) => { 
                return state.ourcoffee.find((card) => card.id === +id)
            }
        },
        getCoffeeById: (state) => (id) => {
            return state.ourcoffee.find(coffee => coffee.id === id);
        },
    },
}
export default ourCoffee