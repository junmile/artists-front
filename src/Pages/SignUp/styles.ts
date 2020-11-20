import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../Components/Button';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;
    margin-top: 5rem;
`;

export const LoginContainer = styled.div`
    color: #2f2f2f;
    padding: 30px;
    margin: 0.2rem 40px 0 40px;
    width: 100%;
    align-self: center;
    max-width: 500px;
    /* height: 500px; */
    background-color: white;
    border-radius: 10px;
`;

export const RowContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    border-top: 1px solid rgba(0, 0, 0.1, 0.2);
    padding-top: 1rem;
`;

export const ButtonContainer = styled(Button)`
    width: 100%;
    &:hover {
        color: #fcc159;
    }
    margin: auto 30px;
`;

export const LinkButton = styled(Link)`
    color: #2f2f2f;
    &:hover {
        color: #fcc159;
    }
`;
