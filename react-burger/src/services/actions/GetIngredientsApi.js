import { IngredientsURL } from "../../utils/constants";
import { GET_INGREDIENTS_ERR, GET_INGREDIENTS_OK } from "./actions";


function getIngredients() {
    return function (dispatch) {
        fetch(IngredientsURL)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((data) => {
            if (data.success) {
                dispatch({
                    type: GET_INGREDIENTS_OK,
                    ingredients: data.data
                })
            } else {
                dispatch({
                    type: GET_INGREDIENTS_ERR
                })
            }
          })
        .catch(function(error) {
            dispatch({
                type: GET_INGREDIENTS_ERR
            })
        })
    }
  };

  export default getIngredients