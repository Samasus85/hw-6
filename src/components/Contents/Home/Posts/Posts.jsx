import Post from '../Post/Post';
import css from './Posts.module.css'
import React from 'react';


const Posts = (props) => {

    let postsElements = props.postData.map((p, i) => <Post key={i} message={p.message} countLikes={p.countLikes} />);
    let newPostElement = React.createRef();
    const addPost = () => {
        let text = newPostElement.current.value;
        // alert(text)
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <section>
            <div>

                <textarea ref={newPostElement} ></textarea>
                <button onClick={addPost}> Add post</button>
                <button>Remove post</button>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </section>
    )
}
export default Posts;
