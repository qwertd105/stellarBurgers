import {FC} from 'react';
import React from 'react';
import './App.module.css';
import appStyles from './App.module.css'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients'
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import { IngredientsURL } from '../../utils/constants';



function App() {

  const [ingredients, setIngredients] = React.useState([])
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [error, setError] = React.useState(null)
  const [modalChild, setModalChild] = React.useState('');


  function onModalOpen(node) {
    setIsModalOpen(true);
    setModalChild(node);
  }

  function onModalClose() {
    setIsModalOpen(false);
  }

  function getIngredients() {
    fetch(IngredientsURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((data) => {
        setIngredients(data.data)
        setIsLoaded(true)
        })
      .catch((err) => {
        setError(err)
      })
  };

  React.useEffect(() => {
    getIngredients();
  }, [])


  return (
    <>
      {error == null ? 
      (<div className={appStyles.app}>
      {isModalOpen && isLoaded &&
        <Modal onClose={onModalClose}>
          {modalChild}
        </Modal>
      }
      <AppHeader />
      <main className={appStyles.mainPage}>
        {isLoaded && 
        <>
          <BurgerIngredients ingredients={ingredients} onModalOpen={onModalOpen} />
          <BurgerConstructor ingredients={ingredients} onModalOpen={onModalOpen} />
        </>}
      </main>
    </div>)
     : <p>Ошибка: {error}</p>}
    
    </>

  );
}

export default App;
