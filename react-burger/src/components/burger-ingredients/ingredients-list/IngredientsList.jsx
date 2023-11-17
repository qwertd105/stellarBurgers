import { IngredientCard } from "./ingredient-card/IngredientCard";
import listStyles from "./IngredientsList.module.css"


export function IngredientsList({ ingredients, text }) {
    return (
        <section>
            <p className="text text_type_main-medium pb-6">
            {text}
            </p>
            <div className={listStyles.cardContainer}>
            {ingredients.map((ingredient) => (
            <IngredientCard ingredient={ingredient} />
        )
            )}
            </div>
        </section>
    )
}