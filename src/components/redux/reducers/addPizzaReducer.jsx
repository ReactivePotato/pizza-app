const initialState = []

const ADD_PIZZA = 'ADD_PIZZA'

const pizzaReducer = (state = initialState, action) => {
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
        default:
            return state
    }
}

export const addPizzaAction = (payload) => ({type: ADD_PIZZA, payload})

export default pizzaReducer