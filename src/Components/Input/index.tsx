import React, { FC, SetStateAction } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    margin-top: 20px;
    &:first-child {
        margin-top: 3rem;
    }
    color: #2f2f2f;
    font-weight: bold;
    display: flex;
    width: 100%;
    height: 40px;
    border: none;
    padding: 10px;
    border-radius: 8px;
    background-color: #ffe4e4;
    font-size: 15px;
    &::placeholder {
        color: #494949;
        font-weight: bold;
        font-size: 15px;
    }
`;

type IProps = {
    placeholder: string;
    value: string;
    setStateFn: React.Dispatch<SetStateAction<string>>;
    type?: string;
};

const Input: FC<IProps> = ({ placeholder, value, setStateFn, type }: IProps) => <StyledInput type={type} value={value} onChange={(e) => setStateFn(e.target.value)} placeholder={placeholder} />;

export default Input;
