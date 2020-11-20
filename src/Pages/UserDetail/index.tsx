import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Cotainer, PhotoDiv } from './styles';

const UserDetail: FC = () => {
    return (
        <Cotainer>
            <PhotoDiv />

            <Link to="board">
                <h2>뒤로가기</h2>
            </Link>
            <Link to="userdetail">
                <h2>수정</h2>
            </Link>
        </Cotainer>
    );
};

export default UserDetail;
