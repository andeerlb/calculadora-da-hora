import * as React from "react";
import { LightTheme, DarkTheme } from '../../styles/'
const ThemeContext = React.createContext({});

export function MyThemeProvider({ children }) {
    const [theme, setTheme] = React.useState(LightTheme);
    console.log(theme === LightTheme);

    function toggleTheme() {
        if (theme === LightTheme) {
            setTheme(DarkTheme);
        } else if (theme === DarkTheme) { }
    }
    return (
        <ThemeContext.Provider value={{
            toggleTheme,
            theme
        }}>
            {children}
        </ThemeContext.Provider>
    )
};

export function useThemeProvider() {
    const context = React.useContext(ThemeContext);
    return context;
}