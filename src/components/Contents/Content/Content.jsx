import css from './Content.module.css'
import Posts from '../Home/Posts/Posts';
import PostInfo from './PostInfo';

const Content = (props) => {
    return (
        <main className={css.main}>
            <PostInfo />
            <Posts postData={props.state.postData} addPost={props.addPost} />
        </main>
    )
}
export default Content;
