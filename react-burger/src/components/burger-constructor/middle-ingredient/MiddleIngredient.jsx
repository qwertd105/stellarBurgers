import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './MiddleIngredient.module.css'

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