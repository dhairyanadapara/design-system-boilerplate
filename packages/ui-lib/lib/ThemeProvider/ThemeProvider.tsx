import * as React from 'react';
import { ThemeProvider as StyleThemeProvider } from 'styled-components';
import { StyledGlobals } from './global';
import { ThemeProviderProps } from './ThemeProvider.types';


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => (
    <StyleThemeProvider theme={theme}>
        <StyledGlobals />
        {children}
    </StyleThemeProvider>
)

export default ThemeProvider;