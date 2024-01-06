import { ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT } from "./actions";

export function AddIngredient(ingredient) {
    return {
        type: ADD_INGREDIENT,
        ingredient: ingredient
    }
}

export function DeleteIngredient(ingredient, id) {
    return {
        type: DELETE_INGREDIENT,
        ingredient: ingredient,
        id: id
    }
}

export function MoveIngredient(from, to) {
    return {
        type: MOVE_INGREDIENT,
        from: from,
        to: to
    }
}