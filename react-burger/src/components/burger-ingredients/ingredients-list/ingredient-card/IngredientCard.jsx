import React from 'react'
import cardStyles from './IngredientCard.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../../../ingredient-details/IngredientDetails'
import PropTypes from "prop-types";

IngredientCard.propTypes = {
    ingredient: PropTypes.object.isRequired,
    onModalOpen: PropTypes.func.isRequired
}

export function IngredientCard({ ingredient, onModalOpen }) {

    function onIngredientOpen() {
        const node = <IngredientDetails ingredient={ingredient} />
        onModalOpen(node)
    }

    return (
        <div className={cardStyles.card} onClick={onIngredientOpen}>
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
