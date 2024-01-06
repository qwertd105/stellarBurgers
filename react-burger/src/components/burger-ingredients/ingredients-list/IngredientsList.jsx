import { IngredientCard } from "./ingredient-card/IngredientCard";
import listStyles from "./IngredientsList.module.css"
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

IngredientsList.propTypes = {
    ingredients: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
}

export function IngredientsList({ ingredients, text}) {
    
    const ingredientsConstructor = useSelector( (store) => store.ingredientsConstructor )

    return (
        <section>
            <p className="text text_type_main-medium pb-6">
            {text}
            </p>
            <div className={listStyles.cardContainer}>
            {ingredients.map((ingredient) => (
                <div key={ingredient._id}>
                    <IngredientCard ingredient={ingredient} amount={ingredientsConstructor.amounts.has(ingredient._id) ? 
                                                                    ingredientsConstructor.amounts.get(ingredient._id) :
                                                                    0}/>
                </div>
        )
            )}
            </div>
        </section>
    )
}