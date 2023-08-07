import * as React from 'react';
import { LightTheme, DarkTheme } from '../../../styles';

const ThemeContext = React.createContext({});

export function MyThemeProvider({ children }) {
    const [theme, setTheme] = React.useState(LightTheme);

    function toggleTheme() {
        setTheme((prevState) => {
            return prevState === LightTheme ? DarkTheme : LightTheme;
        });
    }
    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeProvider() {
    const { toggleTheme, theme } = React.useContext(ThemeContext);
    return { toggleTheme, theme };
}