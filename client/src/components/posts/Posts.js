import { useSelector } from 'react-redux';
import SinglePost from './singlePost/SinglePost';
import './posts.scss';

const Posts = ({ setPostId }) => {

    const posts = useSelector(state => state.posts);

    const singlePost = posts.map(post => {
        const {_id, ...props} = post;
        return (
            <SinglePost key={_id} id={_id} {...props} setPostId={setPostId}/>
        )
    })

    const ExistingPosts = !posts ? <div>No posts</div> : singlePost

    console.log(posts)
    return (
        <main className='posts'>
            <h1 className='posts__title'>Posts</h1>
            {ExistingPosts}
        </main>
    )
}

export default Posts;