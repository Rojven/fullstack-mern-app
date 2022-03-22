import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Posts } from '../../components';
import { getPosts } from '../../redux/actions/posts';
import './home.scss';

const Home = ({ postId, setPostId }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [postId, dispatch])

    return (
        <section className='home'>
            <div className='container'>
                <Posts setPostId={setPostId}/>
            </div>
        </section>
    )
}

export default Home;