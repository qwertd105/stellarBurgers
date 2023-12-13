import { INGREDIENT_DETAILS_ADD, INGREDIENT_DETAILS_DELETE } from "../actions/actions"

const initialState = [
    {
        isModalOpen: false,
        ingredient: null
    }
]

const ingredientDetails = (state = initialState, action) => {
    switch (action.type) {
        case INGREDIENT_DETAILS_ADD:
            return {
                ...state,
                isModalOpen: true,
                ingredient: action.ingredient
            };
        case INGREDIENT_DETAILS_DELETE:
            return {
                ...state,
                isModalOpen: false
            };
        default:
            return state;
    }
}

export default ingredientDetails;