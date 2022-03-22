import { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
//import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../redux/actions/posts';
import './createPostForm.scss';


const CreatePostForm = ({ postId, setPostId }) => {
    
    //const navigate = useNavigate();

    const dispatch = useDispatch();
    const post = useSelector(state => postId ? state.posts.find(post => post._id === postId) : null);

    const [postData, setPostData] = useState({
        title: '',
        message: '',
        creator: '',
        tags: '',
        selectedFile: ''
    })

    const {title, message, creator, tags} = postData;

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const onInputChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }

    const inputsPatternData = [
        {name: 'title', value: title},
        {name: 'message', value: message},
        {name: 'creator', value: creator},
        {name: 'tags', value: tags}
    ]

    const createInputs = inputsPatternData.map((input, i) => {
        const {name, value} = input;
        return (
            <input
            key={i}
            type='text'
            name={name}
            placeholder={name}
            value={value}
            onChange={onInputChange}/>
        )
    })

    const onInputsClear = () => {
        setPostId(null);
        setPostData({
            title: '',
            message: '',
            creator: '',
            tags: '',
            selectedFile: ''
        });
    }
      
    const handleSubmit = (e) => {
        e.preventDefault();
        if(postId) {
            dispatch(updatePost(postId, postData))
        } else {
            dispatch(createPost(postData))
        }
        onInputsClear();
        //navigate('/');
    }

    console.log(postData)
    return (
        <form 
        onSubmit={handleSubmit}
        className="form">
            {createInputs}
            <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            />
            <button type='submit'>отправить</button>
        </form>
    )
}

export default CreatePostForm;