import React from 'react';
import './App.module.css';
import appStyles from './App.module.css'
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients'
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import getIngredients from '../../services/actions/GetIngredientsApi';



function App() {

  const ingredientList = useSelector((store) => store.ingredientList)
  const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(getIngredients());
    }, [])


  return (
    <>
      <AppHeader />
      {ingredientList.loading == false ?
      ( ingredientList.success ?
        <div className={appStyles.app}>
      <main className={appStyles.mainPage}>
        <DndProvider backend={HTML5Backend}>
        <>
          <BurgerIngredients />
          <BurgerConstructor />
        </>
        </DndProvider>
      </main>
    </div>
    : <p className="text text_type_digits-large pt-30">Ошибка</p>)
     : <p className="text text_type_digits-large pt-30">Загрузка...</p>}
    
    </>

  );
}

export default App;
