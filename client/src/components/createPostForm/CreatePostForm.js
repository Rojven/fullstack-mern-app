import { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { useInputChange } from '../../hooks/useInputChange';
import { createPost, updatePost } from '../../redux/actions/posts';
import './createPostForm.scss';


const CreatePostForm = ({ postId, setPostId }) => {
    
    const dispatch = useDispatch();
    const post = useSelector(state => postId ? state.posts.find(post => post._id === postId) : null);

    const [postData, setPostData] = useState({
        title: '',
        message: '',
        creator: '',
        tags: '',
        selectedFile: ''
    })

    const {onInputChange} = useInputChange(postData, setPostData);

    const {title, message, creator, tags} = postData;

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

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