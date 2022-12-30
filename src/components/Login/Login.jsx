import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate('/Adminpage')
    }

    return (
        <div className={styles.entireWrapper}>
            <div className={styles.middleWrapper}>
                <h2>Login</h2>
                <div>
                    <label htmlFor='input_id'>ID : </label>
                    <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
                </div>
                <div>
                    <label htmlFor='input_pw'>PW : </label>
                    <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
                </div>
                <div className={styles.buttonStyle}>
                    <button type='button' onClick={onClickLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;

