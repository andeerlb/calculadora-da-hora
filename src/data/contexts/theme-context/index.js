import * as React from "react";
import { LightTheme, DarkTheme } from '../../../styles'
const ThemeContext = React.createContext({});

export function MyThemeProvider({ children }) {
    const [theme, setTheme] = React.useState(LightTheme);
    let name = 'maicon';
    function toggleTheme() {
        if (theme === LightTheme) {
            setTheme(DarkTheme);
        } else if (theme === DarkTheme) {
            setTheme(LightTheme);
        }
    }
    return (
        <ThemeContext.Provider value={{
            toggleTheme,
            theme,
            name
        }}>
            {children}
        </ThemeContext.Provider>
    )
};

export function useThemeProvider() {
    React.useContext(ThemeContext);
    return React.useContext(ThemeContext);;
}