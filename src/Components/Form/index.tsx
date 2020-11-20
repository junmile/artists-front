import React, { FC } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    margin-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0.1, 0.2);
    width: 100%;
    display: flex;
    flex-direction: column;
`;
type IProps = {
    submitFn: any;
};

const Form: FC<IProps> = ({ children, submitFn }) => {
    return <FormContainer onSubmit={submitFn}>{children}</FormContainer>;
};

export default Form;
