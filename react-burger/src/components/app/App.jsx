import React from 'react';
import './App.module.css';
import appStyles from './App.module.css'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients'
import BurgerConstructor from '../burger-constructor/BurgerConstructor';


const URL = 'https://norma.nomoreparties.space/api/ingredients' 

function App() {

  const [ingredients, setIngredients] = React.useState([])
  const [isLoaded, setIsLoaded] = React.useState(false)

  function getIngredients() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setIngredients(data.data)
        setIsLoaded(true)
        })
  };

  React.useEffect(() => {
    getIngredients();
  }, [])




  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.mainPage}>
        {isLoaded && <>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
        </>}
      </main>
    </div>
  );
}

export default App;
