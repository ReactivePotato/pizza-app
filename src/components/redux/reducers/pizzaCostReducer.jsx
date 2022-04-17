const initialState = []

const CHANGE_PIZZA_COST = 'CHANGE_PIZZA_COST'
const DROP_PIZZA_COST = 'DROP_PIZZA_COST'

const pizzasCost = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PIZZA_COST: {
            const foundedPizza = state.find((pizza) => pizza.pizza_id === action.payload.pizza_id)
            if (typeof foundedPizza !== 'undefined') {
                return state.map((pizza) => {
                    if (pizza.pizza_id === action.payload.pizza_id) {
                        return { ...pizza, pizza_type: action.payload.pizza_type, pizza_cost: pizza.pizza_cost + action.payload.pizza_cost }
                    }
                    return pizza
                })
            }
            return [...state, action.payload]
        }
        case DROP_PIZZA_COST: {
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

export const changePizzaCost = (payload) => ({type: CHANGE_PIZZA_COST, payload})
export const dropPizzaCost = (payload) => ({type: DROP_PIZZA_COST, payload})

export default pizzasCost