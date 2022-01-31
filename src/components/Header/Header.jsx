import logo from '../UI/img/logo.svg';
import avatar from '../UI/img/avatar.jpg'
import classes from './Header.module.css'


const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <img src={logo} className={classes.logo} alt="logo" />
            </div>
            <div>
                <img src={avatar} className={classes.avatar} alt="avatar" />
            </div>
        </header>
    )
}
export default Header;
