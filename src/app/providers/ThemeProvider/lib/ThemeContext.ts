import {createContext} from "react";
import exp from "constants";

export enum Theme {
    LIGHT='normal',
    DARK = 'dark',
}
export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme)=> void;
}
export const ThemeContext = createContext<ThemeContextProps>({})
export const LOCAL_STORAGE_THEME_KEY = 'theme';