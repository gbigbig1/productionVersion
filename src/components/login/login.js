import React from "react";

import LoginForm from "../../components/login/loginForm";

const Login = ({isAuth, login, onClickFormLoginBtn, onClickLoginBtn, loginInput, pasInput, handlerInputChange, errorLogin}) => (

    <div className='tasks__authorization'>
        { !isAuth && <button
            className='tasks__authorization__autoLogin primaryBtn'
            title='Автоматически заполняться "Логин" и "Пароль", если забыли(не знали)'
            onClick={onClickLoginBtn}
        >Авто вход</button>}
        {isAuth
            ? <span>Приветствую {login}</span>
            : <LoginForm
                onClickFormLoginBtn={onClickFormLoginBtn}
                loginInput={loginInput}
                pasInput={pasInput}
                handlerInputChange={handlerInputChange}
                errorData={errorLogin}
            />
        }
    </div>
)

export default Login;
