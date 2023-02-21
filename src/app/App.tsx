import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";




const App = () => {
    const {theme, toggleTheme} = useTheme();


    return (
        <div className={classNames('app', {hovered: true, selectable: true}, [theme, '1guuyf', 'dhgdgh'])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}> Мэйбл  </Link>
            <Link to={'/about'}> Диппер </Link>
            <AppRouter />
        </div>
    );
};

export default App;