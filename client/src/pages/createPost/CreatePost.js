import { CreatePostForm } from '../../components';
import './createPost.scss';

const CreatePost = ({ postId, setPostId }) => {
    return (
        <section className='create-post'>
            <CreatePostForm postId={postId} setPostId={setPostId}/>   
        </section>
    )
}

export default CreatePost;