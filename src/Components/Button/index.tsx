import React, { FC } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    width: 100%;
    height: 35px;
    border: none;
    text-decoration: none;
    padding: 0;
    color: #2f2f2f;
    background: none;
    &:hover {
        color: #fcc159;
    }
`;

type ButtonProps = {
    value: string;
    onClickFn: any;
};

const Button: FC<ButtonProps> = ({ value, onClickFn }) => {
    return (
        <ButtonContainer onClick={onClickFn}>
            <h2>{value}</h2>
        </ButtonContainer>
    );
};

export default Button;
