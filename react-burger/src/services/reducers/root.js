import { combineReducers } from "redux";
import ingredientList from "./IngredientList";
import ingredientDetails from "./IngredientDetails";

const rootReducer = combineReducers({
    ingredientList,
    ingredientDetails
})

export default rootReducer;