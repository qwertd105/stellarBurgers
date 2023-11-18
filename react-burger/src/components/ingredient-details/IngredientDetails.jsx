import style from "./IngredientDetails.module.css"
import PropTypes from "prop-types";

IngredientDetails.propTypes = {
    ingredient: PropTypes.object.isRequired
}

function IngredientDetails({ ingredient }) {
    return (
        <>
        <div className={style.head + " pt-10"}>
            <p className="text text_type_main-large pl-10">
                Детали ингредиента
            </p>
        </div>
        <img src={ingredient.image} alt={ingredient.name} className={style.image}/>
        <p className="text text_type_main-medium pt-4">
         {ingredient.name}
        </p>
        <div className={style.nutrients + " pt-8"}>
            <div className={style.nutrient}>
            <p className="text text_type_main-default text_color_inactive">
                Калории,ккал
            </p>
            <p className="text text_type_main-default text_color_inactive">
                {ingredient.calories}
            </p>
            </div>
            <div className={style.nutrient}>
            <p className="text text_type_main-default text_color_inactive">
                Белки, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
                {ingredient.proteins}
            </p>
            </div>
            <div className={style.nutrient}>
            <p className="text text_type_main-default text_color_inactive">
                Жиры, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
                {ingredient.fat}
            </p>
            </div>
            <div className={style.nutrient}>
            <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
            </p>
            <p className="text text_type_main-default text_color_inactive">
                {ingredient.carbohydrates}
            </p>
            </div>
        </div>
        </>

    )
}

export default IngredientDetails