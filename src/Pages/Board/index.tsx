import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Board: FC = () => {
    return (
        <div>
            <h2>보드</h2>
            <Link to="boarddetail">
                <h2>보드디테일</h2>
            </Link>
            <Link to="userdetail">
                <h2>유져디테일</h2>
            </Link>
        </div>
    );
};

export default Board;
