import React from 'react';
import './App.module.css';
import appStyles from './App.module.css'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeader from '../app-header/AppHeader';


function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader />
    </div>
  );
}

export default App;
