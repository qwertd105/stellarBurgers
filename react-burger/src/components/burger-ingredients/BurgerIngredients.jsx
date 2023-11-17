import React from 'react'
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import {IngredientCard} from './ingredients-list/ingredient-card/IngredientCard'
import {IngredientsList} from './ingredients-list/IngredientsList'

function BurgerIngredients({ingredients}) {

    const [current, setCurrent] = React.useState('bun')
    const bunArray = ingredients.filter((item) => item.type === 'bun');
    const mainArray = ingredients.filter((item) => item.type === 'main');
    const sauceArray = ingredients.filter((item) => item.type === 'sauce');

    React.useEffect(() => {
        console.log(bunArray)
    }, [ingredients]) 

    return (
        <div className={styles.mainContainer + " pt-10"}>
              <p className="text text_type_main-large">
                Соберите бургер
              </p>
              <div style={{ display: 'flex'}} className="pt-5 pb-10 ">
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
              <div className={styles.sectionContainer}>
                <IngredientsList text="Булки" ingredients={bunArray} />
                <IngredientsList text="Соусы" ingredients={sauceArray} />
                <IngredientsList text="Начинки"ingredients={mainArray} />
              </div>

        </div>
    )
}

export default BurgerIngredients;