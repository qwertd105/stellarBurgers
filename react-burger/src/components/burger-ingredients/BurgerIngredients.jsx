import React from 'react'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import {IngredientsList} from './ingredients-list/IngredientsList'
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import getIngredients from '../../services/actions/GetIngredientsApi';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import Modal from '../Modal/Modal';
import { deleteIngredientDetails } from '../../services/actions/IngredientDetails';

BurgerIngredients.propTypes = {
}

function BurgerIngredients() {

    const [current, setCurrent] = React.useState('bun')
    
    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(getIngredients());
    }, [])

    const ingredientList = useSelector(
      (store) => store.ingredientList
    )

    const ingredientDetails = useSelector((store) => store.ingredientDetails)

    React.useEffect(() => {
        console.log(ingredientList)
    }, [ingredientList]) 

    function onModalClose() {
      dispatch(deleteIngredientDetails());
    }

    return (
      <>
        {ingredientDetails.isModalOpen && 
          <Modal onClose={onModalClose}>
          <IngredientDetails ingredient={ingredientDetails.ingredient}/>
        </Modal>
        }
              <div className={styles.mainContainer + " pt-10"}>
              <p className="text text_type_main-large">
                Соберите бургер
              </p>
              <div className={styles.tab + " pt-5 pb-10 "}>
                    <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                    </Tab>
                    <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                    </Tab>
                    <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                    </Tab>
              </div>
              {ingredientList.success &&
                <div className={styles.sectionContainer}>
                <IngredientsList text="Булки" ingredients={ ingredientList.ingredients.filter((item) => item.type === 'bun') } />
                <IngredientsList text="Соусы" ingredients={ ingredientList.ingredients.filter((item) => item.type === 'sauce') } />
                <IngredientsList text="Начинки" ingredients={ ingredientList.ingredients.filter((item) => item.type === 'main') } />
              </div>
              }
              

        </div>
      </>

    )
}

export default BurgerIngredients;