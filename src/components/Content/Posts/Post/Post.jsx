import classes from './Post.module.css'
import postImg from '../../../UI/img/bella.png'
const Post = () => {
    return (
        <div>
            My post

            <div className={classes.post}>
                <div className={classes.item}>
                    <img src={postImg} alt='post-img' />
                    post 1
                    <div>
                        <span>like</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;
