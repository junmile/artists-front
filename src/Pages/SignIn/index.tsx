import React, { useState } from 'react';
import { FC } from 'react';
import Button from '../../Components/Button';
import Form from '../../Components/Form';
import Input from '../../Components/Input';
import { ButtonContainer, Container, LinkButton, LoginContainer, RowContainer } from './styles';
import env from 'dotenv';
import Axios from 'axios';
import { toast } from 'react-toastify';
env.config();

type IProps = {
    auth: any;
};

const SignIn: FC<IProps> = ({ auth }) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    console.log('ㅇㅇ ? ', auth);
    const loginFn = async (event: Event) => {
        console.log(userId, password);
        event.preventDefault();
        await Axios.post('/signin', { userId, password })
            .then((response) => {
                toast.success(response.data.message);
                localStorage.setItem('JWT', response.data.accessToken);
                window.location.reload();
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error(error.message);
                }
                setUserId('');
                setPassword('');
            });
    };

    return (
        <div>
            <Container>
                <LoginContainer>
                    <h2>로그인</h2>
                    <Form submitFn={loginFn}>
                        <Input value={userId} setStateFn={setUserId} placeholder="아이디" />
                        <Input value={password} setStateFn={setPassword} placeholder="패스워드" />
                        <RowContainer>
                            <ButtonContainer>
                                <Button value={'로그인'} onClickFn={loginFn} />
                            </ButtonContainer>
                            <ButtonContainer>
                                <LinkButton to="signup">
                                    <h3>회원가입</h3>
                                </LinkButton>
                            </ButtonContainer>
                        </RowContainer>
                    </Form>
                </LoginContainer>
            </Container>
        </div>
    );
};

export default SignIn;
