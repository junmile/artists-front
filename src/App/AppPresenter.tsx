import React, { FC, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import UserDetail from '../Pages/UserDetail';
import Board from '../Pages/Board';
import BoardDetail from '../Pages/BoardDetail';

const AppPresenter: FC = () => {
    const [isMember, setIsMember] = useState(false);

    useEffect(() => {
        console.log('변변 : ', isMember);
    }, [isMember]);

    console.log(isMember);
    if (isMember === false) {
        return (
            <Switch>
                <Route path={'/signin'} auth={setIsMember} exact={true} component={SignIn} />
                <Route path={'/signup'} auth={setIsMember} component={SignUp} />
                <Redirect from={'*'} to={'/signin'} />
            </Switch>
        );
    } else {
        return (
            <Switch>
                <Route path={'/userdetail'} component={UserDetail} />
                <Route path={'/board'} component={Board} />
                <Route path={'/boarddetail'} component={BoardDetail} />
                <Redirect from={'*'} to={'/board'} />
            </Switch>
        );
    }
};

export default AppPresenter;
