import React from "react";

import './loginForm.css'

const LoginForm = ({onClickFormLoginBtn, loginInput, pasInput, handlerInputChange, errorData}) => (
    <form className='tasks__loginForm' onSubmit={onClickFormLoginBtn} >
            {errorData &&
                 <div className='textError'>
                        {errorData}
                </div>
            }
            <div className='tasks__loginForm__content'>
                <input
                    className={errorData
                        ? 'tasks__loginForm__input tasks__loginForm__login error'
                        : 'tasks__loginForm__input tasks__loginForm__login'}
                    name='loginInput'
                    placeholder='Логин'
                    onChange={handlerInputChange}
                    value={loginInput}
                />
                <input
                    className={errorData
                        ? 'tasks__loginForm__input tasks__loginForm__password error'
                        : 'tasks__loginForm__input tasks__loginForm__password'}
                    name='pasInput'
                    type='password'
                    placeholder='Пароль'
                    onChange={handlerInputChange}
                    value={pasInput}
                />
                <button className='primaryBtn' type='submit'>Войти</button>
        </div>

    </form>
)

export default LoginForm;
