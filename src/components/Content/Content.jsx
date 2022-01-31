import classes from './Content.module.css'
import bg from '../UI/img/cover-center.png';
// import Post from './Posts/Post/Post';
import Posts from './Posts/Posts/Posts';

const Content = () => {
    return (
        <main className={classes.main}>
            <div>
                <img className={classes.bg} src={bg} alt='bg' />
            </div>
            {/* <Post /> */}
            <Posts />
        </main>
    )
}
export default Content;
