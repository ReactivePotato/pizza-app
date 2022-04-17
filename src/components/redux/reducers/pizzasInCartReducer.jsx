const initialState = []

const ADD_PIZZA = 'ADD_PIZZA'
const REMOVE_ALL_PIZZAS = 'REMOVE_ALL_PIZZAS'

const pizzasInCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA: {
            const foundedPizza = state.find((pizza) => pizza.pizza_id === action.payload.pizza_id)
            if (typeof foundedPizza !== 'undefined') {
                return state.map((pizza) => {
                    if (pizza.pizza_id === action.payload.pizza_id) {
                        return { ...pizza, pizza_amount: pizza.pizza_amount + 1 }
                    }
                    return pizza
                })
            }
            return [...state, action.payload]
        }
        case REMOVE_ALL_PIZZAS: {
            const foundedPizza = state.find((pizza) => pizza.pizza_id === action.payload.pizza_id)
            if (typeof foundedPizza !== 'undefined') {
                return state.filter((pizza) => {
                    return pizza.pizza_id !== action.payload.pizza_id
                })

            }
            return state
        }
        default:
            return state
    }
}

export const addPizzaAction = (payload) => ({type: ADD_PIZZA, payload})
export const clearPizzaAction = (payload) => ({type: REMOVE_ALL_PIZZAS, payload})

export default pizzasInCart