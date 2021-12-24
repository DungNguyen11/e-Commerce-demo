import React, { useState} from 'react'
import * as S from './styles'

// import { Form, Input, Button, Checkbox } from 'antd';

import LoginFormPage from './Login'
import RegisterPage from './Register'


const LoginAndRegisterPage = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <S.LoginContainer>
            <S.LoginForm>
                {isLogin ? (
                    <LoginFormPage setIsLogin={setIsLogin}/>
                ): (
                    <RegisterPage setIsLogin={setIsLogin}/>
                )}
            </S.LoginForm>
        </S.LoginContainer>
    )
}

export default LoginAndRegisterPage
