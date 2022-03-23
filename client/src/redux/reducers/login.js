import { LOGIN, LOGOUT } from '../actionTypes';

const initialState = {
    data: null
}

const reducer = (auth = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('prof', JSON.stringify({...action?.payload}))
            return {
                ...auth,
                data: action?.payload
            }  
        case LOGOUT:
            localStorage.clear();
            return {
                ...auth,
                data: null
            }   
        default: 
            return auth;
    }
}

export default reducer;