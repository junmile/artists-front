import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppPresenter from './AppPresenter';
import GlobalStyle from '../styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider } from 'react-cookie';

const AppContainer: FC = () => {
    return (
        <BrowserRouter>
            <CookiesProvider>
                <AppPresenter />
                <GlobalStyle />
                <ToastContainer position="bottom-center" autoClose={5000} closeOnClick rtl={false} pauseOnFocusLoss pauseOnHover />
            </CookiesProvider>
        </BrowserRouter>
    );
};

export default AppContainer;
