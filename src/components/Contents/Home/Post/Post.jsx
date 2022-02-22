import css from './Post.module.css'
import postImg from '../../../UI/img/bella.png'
const Post = (props) => {

    return (
        <div className={css.item}>
            My post

            <div className={css.post}>
                <div className={css.item}>
                    <img src={postImg} alt='post-img' />
                    {props.message}
                    <div>
                        <span>like</span>
                        {props.countLikes}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;
