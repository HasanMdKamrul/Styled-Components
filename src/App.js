
// import './assets/css/dark.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Components/assets/Global.styles';
import Tutorial from './Components/Tutorial';

export default function App() {

    const [isDark, setisDark] = useState(false);
    const theme = isDark ? 'dark' : 'light';
    const changeTheme = ()=>{
        setisDark((preVState)=> !preVState );
    }

    return(
        <>
            <GlobalStyle/>
            <button type="button" onClick={changeTheme}>
                Click To Change Theme
            </button>
                <ThemeProvider theme={{lightTheme: theme } }>
                    <Tutorial />
                </ThemeProvider>
        </>
        
    );
}