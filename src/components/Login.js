import React from 'react';
import './styles/Login.css';
import { fbPopup } from '../Api';

const Login = ({onReceive}) => {

    const handleLogin = async () => {
        let result = await fbPopup();
        if (result){
            onReceive(result);
        }else{
            alert("Erro!");
        }
    };

    return(
        <div className='login'>
            <button onClick={handleLogin}>
                Sign in with Google
            </button>
        </div>
    );
}

export default Login;