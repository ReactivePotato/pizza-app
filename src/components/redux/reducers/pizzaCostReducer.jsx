const initialState = []

const CHANGE_PIZZA_COST = 'CHANGE_PIZZA_COST'

const pizzasCost = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PIZZA_COST: {
            const foundedPizza = state.find((pizza) => pizza.pizza_id === action.payload.pizza_id)
            if (typeof foundedPizza !== 'undefined') {
                return state.map((pizza) => {
                    if (pizza.pizza_id === action.payload.pizza_id) {
                        return { ...pizza, pizza_cost: pizza.pizza_cost + action.payload.pizza_cost }
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

export const changePizzaCost = (payload) => ({type: CHANGE_PIZZA_COST, payload})

export default pizzasCost