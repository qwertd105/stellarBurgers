import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './MiddleIngredient.module.css'
import PropTypes from "prop-types";

MiddleIngredient.propTypes = {
    ingredient: PropTypes.object.isRequired
}
function MiddleIngredient({ ingredient }) {

    return (
        <div className={styles.main}>
            <DragIcon type="primary"/>
            <ConstructorElement
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
             />
        </div>
    )
}

export default MiddleIngredient;