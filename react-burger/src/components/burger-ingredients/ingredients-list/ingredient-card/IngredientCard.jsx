import React from 'react'
import cardStyles from './IngredientCard.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../../../ingredient-details/IngredientDetails'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { addIngredientDetails } from '../../../../services/actions/IngredientDetails';
import { useDrag } from 'react-dnd';

IngredientCard.propTypes = {
    ingredient: PropTypes.object.isRequired,
    amount: PropTypes.number.isRequired
}

export function IngredientCard({ ingredient, amount}) {

    const dispatch = useDispatch();

    const [{ isDrag }, drag] = useDrag({
        type: "ingredient",
        item: { ingredient },
        collect: (monitor) => ({
          isDrag: monitor.isDragging(),
        }),
      });

    function onIngredientOpen() {
        dispatch(addIngredientDetails(ingredient));
    }

    return (
        <div className={cardStyles.card} onClick={onIngredientOpen} ref={drag}>
            {amount > 0 &&
                <Counter count={amount} size="default" />
            }
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
