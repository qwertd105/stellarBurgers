import { GET_INGREDIENTS_ERR, GET_INGREDIENTS_OK } from "../actions/actions"

const initialState = [
    {
        ingredients: [],
        success: false,
        loading: true
    }
]

const ingredientList = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_OK:
            return {
                ...state,
                loading: false,
                success: true,
                ingredients: action.ingredients
            };
        case GET_INGREDIENTS_ERR:
            return {
                ...state,
                loading: false,
                ingredients: [],
                success: false
            };
        default:
            return state;
    }
}

export default ingredientList;