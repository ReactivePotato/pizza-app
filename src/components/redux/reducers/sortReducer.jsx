const initialState = {sort_type: 'name'}

const SET_SORT_TYPE = 'SET_SORT_TYPE'

const sortingType = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_TYPE: {
            return action.payload
        }
        default: 
        return state
    }
}

export const changeSortType = (payload) => ({type: SET_SORT_TYPE, payload})

export default sortingType