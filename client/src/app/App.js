import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Home, CreatePost, Account, Login } from '../pages';
import { Header } from '../components';

import './app.scss';

const App = () => {

    const [postId, setPostId] = useState(null);
    console.log(postId)

    return (
        <>
        <Header />
        <Routes>
            <Route 
            path='/' 
            element={<Home postId={postId} setPostId={setPostId} />} />
            <Route 
            path='/createPost' 
            element={<CreatePost postId={postId} setPostId={setPostId} />} />
            <Route 
            path='/account' 
            element={<Account />} />
            <Route
            path='/login'
            element={<Login />}/>
        </Routes>
        </>
    )
}

export default App;