import Post from '../Post/Post';
import classes from './Posts.module.css'

const Posts = () => {
    return (
        <div>
            <div>
                <textarea>New Post</textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={classes.posts}>
                <Post />
                <Post />
                <Post />

            </div>
        </div>
    )
}
export default Posts;
