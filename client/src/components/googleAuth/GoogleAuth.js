import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../redux/actions/login';
import './googleAuth.scss';

const GoogleAuth = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onGoogleSuccess = (res) => {
        //если нет доступа к res, то ошибка не появится
        const result = res?.profileObj;
        const token = res?.tokenId;
        
        dispatch(googleLogin({data:{result, token}}));
        navigate('/');
    }

    const onGoogleFailure = (err) => {
        console.log(err, 'Ошибка подключения');
    }

    return (
        <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_ID}
        onSuccess={onGoogleSuccess}
        onFailure={onGoogleFailure}
        cookiePolicy="single_host_origin"
        render={(renderProps) => (
            <button 
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}>
                Войти через google аккаунт
            </button>
        )}/>
    )
}

export default GoogleAuth;