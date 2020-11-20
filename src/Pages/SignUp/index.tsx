import React, { useState } from 'react';
import { FC } from 'react';
import Form from '../../Components/Form';
import Input from '../../Components/Input';
import { ButtonContainer, Container, LoginContainer, RowContainer } from './styles';
import env from 'dotenv';
import Axios from 'axios';
import { toast } from 'react-toastify';
env.config();

const SignIn: FC = () => {
    const [userId, setUserId] = useState('guest');
    const [name, setName] = useState('게스트');
    const [password, setPassword] = useState('0000');
    const [password1, setPassword1] = useState('0000');

    const signUpFn = async (event: Event) => {
        event.preventDefault();
        await Axios.post('/user', { userId, name, password, password1 })
            .then((response) => {
                toast.success(response.data.accessToken);
                localStorage.setItem('JWT', response.data.accessToken);
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error(error.message);
                }
                setUserId('');
                setName('');
                setPassword('');
                setPassword1('');
            });
    };

    return (
        <div>
            <Container>
                <LoginContainer>
                    <h2>회원가입</h2>
                    <Form submitFn={signUpFn}>
                        <Input value={name} setStateFn={setName} placeholder="이름" />
                        <Input value={userId} setStateFn={setUserId} placeholder="아이디" />
                        <Input type="password" value={password} setStateFn={setPassword} placeholder="패스워드" />
                        <Input type="password" value={password1} setStateFn={setPassword1} placeholder="패스워드확인" />
                        <RowContainer>
                            <ButtonContainer value="가입신청" onClickFn={signUpFn} />
                        </RowContainer>
                    </Form>
                </LoginContainer>
            </Container>
        </div>
    );
};

export default SignIn;
