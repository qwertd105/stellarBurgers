import React from 'react'
import cardStyles from './IngredientCard.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


export function IngredientCard({ ingredient }) {

    React.useEffect(() => {
        console.log(ingredient.image)
    }) 

    return (
        <div className={cardStyles.card}>
            <img src={ingredient.image} alt={ingredient.name} className={cardStyles.image + " ml-4 mr-4"}/>
            <div className={cardStyles.currencyContainer + " pt-1 pb-1"}>
            <p className="text text_type_digits-default">{ingredient.price}</p>
            <CurrencyIcon type="primary" />
            </div>
            <p className={cardStyles.title + " text text_type_main-default"}>
            {ingredient.name}
            </p>
        </div>
    )
}
