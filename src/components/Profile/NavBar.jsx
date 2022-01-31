import classes from './NavBar.module.css';
const NavBar = () => {
    return (
        <nav className={classes.navbar}>
            <ul>
                <li>Home</li>
                <li>Trending</li>
                <li>Subscriptions</li>
            </ul>
            <ul>
                <li><a>Library</a></li>
                <li><a>History</a></li>
                <li><a>Watch later</a></li>
                <li><a>Favourites</a></li>
                <li><a>Liked videos</a></li>
                <li><a>Music</a></li>
                <li><a>Games</a></li>
                <li><a>Show more</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;
