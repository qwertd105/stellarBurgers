import { GET_INGREDIENTS_ERR, GET_INGREDIENTS_OK } from "../actions/actions"

const initialState = [
    {
        ingredients: [],
        success: false
    }
]

const ingredientList = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_OK:
            return {
                ...state,
                success: true,
                ingredients: action.ingredients
            };
        case GET_INGREDIENTS_ERR:
            return {
                ...state,
                success: false
            };
        default:
            return state;
    }
}

export default ingredientList;