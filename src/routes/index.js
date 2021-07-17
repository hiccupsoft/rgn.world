import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AppHeader from '../components/AppHeader';
import { setDefaultTheme } from '../contexts/ThemeContext';
import HomePage from '../pages/Home/HomePage';
import SecondPage from '../pages/Second/SecondPage';

export const AppRoute = () => {

    useEffect(() => {
        setDefaultTheme();
    }, [])

    return (
        <>
            <AppHeader />
            <Switch>
                {/* <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/users" exact>
                    <Users />
                </Route> */}
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/second" exact>
                    <SecondPage />
                </Route>
            </Switch>
        </>
    )
}