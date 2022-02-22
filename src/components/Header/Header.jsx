import logo from '../UI/img/logo.svg';
import avatar from '../UI/img/avatar.jpg'
import css from './Header.module.css'


const Header = () => {
    return (
        <header className={css.header}>
            <div>
                <img src={logo} className={css.logo} alt="logo" />
            </div>
            <div>
                <img src={avatar} className={css.avatar} alt="avatar" />
            </div>
        </header>
    )
}
export default Header;
