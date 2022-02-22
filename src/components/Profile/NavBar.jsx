import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={css.navbar}>
            <ul className={css.items}>
                <li className={css.item}><NavLink activeclassname={css.activeLink} to='/home'>Главная</NavLink></li>
                <li className={css.item}><NavLink activeclassname={css.activeLink} to='/navigation'>Навигатор</NavLink></li>
                <li className={css.item}><NavLink activeclassname={css.activeLink} to='/dialogs'>Dialogs</NavLink></li>
                <li className={css.item}><NavLink activeclassname={css.activeLink} to='/short'>Shorts</NavLink></li>
                <li className={css.item}><NavLink activeclassname={css.activeLink} to='/subsciptions'>Подписки</NavLink></li>
                <li className={css.item}><NavLink activeclassname={css.activeLink} to='/library'>Библиотека</NavLink></li>
            </ul>
            <ul>
                <li><a href='/settings'>Settings</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;
