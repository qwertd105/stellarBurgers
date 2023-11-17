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
                <div key={ingredient._id}>
                    <IngredientCard ingredient={ingredient} />
                </div>
        )
            )}
            </div>
        </section>
    )
}