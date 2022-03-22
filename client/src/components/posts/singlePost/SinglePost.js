import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLike, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { deletePost, likePost } from '../../../redux/actions/posts';
import './singlePost.scss';

const SinglePost = ({ id, title, message, creator, tags, selectedFile, createdAt, likeCount, setPostId }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onEditBtnClick = () => {
        setPostId(id);
        navigate('/createPost');
    }
    
    return (
        <div className='single-post'>
            <div className='single-post__box'>
                <img src={selectedFile} alt="selectedFile" className='img'/>
            </div>
            <h3 className='single-post__text'>{title}</h3>
            <p className='single-post__text'>{message}</p>
            <p className='single-post__text'>{tags}</p>
            <p className='single-post__text'>{creator}</p>
            <p>{moment(createdAt).fromNow()}</p>
            <div>
                <button
                onClick={() => dispatch(likePost(id))}>
                    <AiOutlineLike/>
                    {likeCount}
                </button>
                <button 
                onClick={() => dispatch(deletePost(id))}>
                    <AiOutlineDelete/>
                </button>
                <button 
                onClick={() => onEditBtnClick()}>
                    <AiOutlineEdit/>
                </button>
            </div>
        </div>
    )
}

export default SinglePost;