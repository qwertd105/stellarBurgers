import { INGREDIENT_DETAILS_ADD, INGREDIENT_DETAILS_DELETE } from "./actions";

export function addIngredientDetails(ingredient) {
    return {
        type: INGREDIENT_DETAILS_ADD,
        ingredient: ingredient
    }
}

export function deleteIngredientDetails() {
    return {
        type: INGREDIENT_DETAILS_DELETE
    }
}