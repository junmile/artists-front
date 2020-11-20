import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const BoardDetail: FC = () => {
    return (
        <div>
            <h2>보드디테일</h2>
            <Link to="board">
                <h2>보드</h2>
            </Link>
            <Link to="boarddetail">
                <h2>수정</h2>
            </Link>
        </div>
    );
};

export default BoardDetail;
