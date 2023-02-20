import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';

import {MainPageAsync} from "pages/MainPage/ui/MainPage.async";

import {classNames} from "shared/lib/classNames/classNames";
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';


const App = () => {
    const {theme, toggleTheme} = useTheme();


    return (
        <div className={classNames('app', {hovered: true, selectable: true}, [theme, '1guuyf', 'dhgdgh'])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}> Мэйбл  </Link>
            <Link to={'/about'}> Диппер </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;