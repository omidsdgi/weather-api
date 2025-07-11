import React, {createContext, useContext, useEffect, useState} from "react";

interface Props {
    children: React.ReactNode;
}
interface ThemeContextType {
    theme: Theme;
    toggleHandler: () => void;
}
type Theme='light' | 'dark'

const ThemeContext=createContext<ThemeContextType|undefined>(undefined )

export const ThemeContextProvider    = ({children}:Props)=>{

    const [theme, setTheme ] = useState<Theme>("light")

    useEffect(()=>{
        const storedTheme=localStorage.getItem("theme") as Theme|null;
        const prefersDark= window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = storedTheme ?? (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
    },[])

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleHandler = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme,toggleHandler}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme باید در ThemeContextProvider استفاده شود');
    }
    return context;
};
export default ThemeContext