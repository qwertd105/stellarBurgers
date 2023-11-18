import { IngredientCard } from "./ingredient-card/IngredientCard";
import listStyles from "./IngredientsList.module.css"
import PropTypes from "prop-types";

IngredientsList.propTypes = {
    ingredients: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
    onModalOpen: PropTypes.func.isRequired
}

export function IngredientsList({ ingredients, text, onModalOpen }) {
    return (
        <section>
            <p className="text text_type_main-medium pb-6">
            {text}
            </p>
            <div className={listStyles.cardContainer}>
            {ingredients.map((ingredient) => (
                <div key={ingredient._id}>
                    <IngredientCard ingredient={ingredient} onModalOpen={onModalOpen} />
                </div>
        )
            )}
            </div>
        </section>
    )
}