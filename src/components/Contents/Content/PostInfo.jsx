import css from './PostInfo.module.css';
import bg from '../../UI/img/cover-center.png';

const PostInfo = () => {
    return (
        <div>

            <div>
                <img className={css.bg} src={bg} alt='bg' />
            </div>
            <div className={css.descriptionBlock}>
                kkkkkk
            </div>
        </div>

    )
}
export default PostInfo;