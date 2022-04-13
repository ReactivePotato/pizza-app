const initialState = {category_id: 0}

const USE_FILTER = 'USE_FILTER'

const pizzasFilter = (state = initialState, action) => {
    switch (action.type) {
        case USE_FILTER: {
            return action.payload
        }
        default:
            return state
    }
}

export const changePizzaCategory = (payload) => ({ type: USE_FILTER, payload })

export default pizzasFilter