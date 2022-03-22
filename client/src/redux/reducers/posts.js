import { FETCH_ALL_POSTS, CREATE_NEW_POST, UPDATE_POST, DELETE_POST } from '../actionTypes';

const reducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return action.payload;
        case CREATE_NEW_POST:
            return [
                ...posts,
                action.payload
            ];
        case UPDATE_POST:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE_POST:
            return posts.filter(post => post._id !== action.payload);
        default: 
            return posts;
    }
}

export default reducer;