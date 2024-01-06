import { combineReducers } from "redux";
import ingredientList from "./IngredientList";
import ingredientDetails from "./IngredientDetails";
import ingredientsConstructor from "./IngredientsConstructor";
import order from "./order";

const rootReducer = combineReducers({
    ingredientList,
    ingredientDetails,
    ingredientsConstructor,
    order
})

export default rootReducer;