import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './MiddleIngredient.module.css'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { DeleteIngredient } from '../../../services/actions/IngredientsConstructor';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import { MoveIngredient } from '../../../services/actions/IngredientsConstructor';

MiddleIngredient.propTypes = {
    ingredient: PropTypes.object.isRequired
}
function MiddleIngredient({ ingredient, id }) {

    const ref = useRef(null)
    const dispatch = useDispatch()

    const [{ isDragging }, dragRef] = useDrag({
        type: "constructor",
        item: { id },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });

    const [{ isHover }, dropRef] = useDrop({
        accept: "constructor",
        collect: (monitor) => ({
          isHover : monitor.isOver()
        }),
    
        drop: (item) => {
          dispatch(MoveIngredient(item.id, id))
        },
      })

    const hover = isHover ? styles.hover : ""

    return (
        <div className={styles.main + " " + hover} ref={dragRef(dropRef(ref))}>
            <DragIcon type="primary"/>
            <ConstructorElement
            handleClose={() =>
                dispatch(DeleteIngredient(ingredient, id))
              }
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
             />
        </div>
    )
}

export default MiddleIngredient;