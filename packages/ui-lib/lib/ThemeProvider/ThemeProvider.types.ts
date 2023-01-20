import { DefaultTheme } from "./global";

export interface ThemeProviderProps {
    theme: DefaultTheme,
    children: JSX.Element | JSX.Element[]
}