import {createContext, useContext, useState} from "react";

const themeContext = createContext();

const ThemeProvider = ({children}) => {
    const [activePage, setActivePage] = useState("");


    return (
        <themeContext.Provider value={{
            activePage,
            setActivePage

}}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = () => useContext(themeContext);

export default ThemeProvider;