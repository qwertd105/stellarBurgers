import headerStyles from './AppHeader.module.css'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';


function AppHeader() {
    
    const [activeNav, setActiveNav] = React.useState('line')

    function onConstruct() {
        setActiveNav('construct')
    }

    function onLine() {
        setActiveNav('line')
    }

    function onProfile() {
        setActiveNav('profile')
    }

    return (
        <header className={headerStyles.header + ' mt-10 text text_type_main-default'}>
            <nav className={headerStyles.burgerNav + ' mt-4 mb-4'}>
                <div onClick={onConstruct} className={(activeNav == 'construct' ? headerStyles.navItemActive : headerStyles.navItem) + ' pl-5'}>
                    <BurgerIcon type={(activeNav == 'construct' ? 'primary' : 'secondary')} />
                    Конструктор
                </div>
                <div onClick={onLine} className={(activeNav == 'line' ? headerStyles.navItemActive : headerStyles.navItem)  + ' pl-5'}>
                    <ListIcon type={activeNav == 'line' ? 'primary' : 'secondary'} />
                    Лента заказов
                </div>
            </nav>
            <Logo />
            <div onClick={onProfile} className={(activeNav == 'profile' ? headerStyles.navItemActive : headerStyles.navItem) + ' pl-5'}>
                    <ProfileIcon type={(activeNav == 'profile' ? 'primary' : 'secondary')} />
                    Личный кабинет
            </div>
        </header>
    );
}

export default AppHeader;