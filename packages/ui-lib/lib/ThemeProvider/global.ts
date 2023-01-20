import { createGlobalStyle, css } from 'styled-components';

interface ThemeBoxProps {
    [key: number]: string
}

interface ThemeColorProps {
    [key: string]: string

}

export interface ThemeProps {
    radius: ThemeBoxProps,
    spaces: ThemeBoxProps,
    fontSizes: ThemeBoxProps,
    colors: ThemeColorProps
}

export interface GlobalThemeProps {
    theme: ThemeProps
}

export const StyledGlobals = createGlobalStyle`
  ${({
    theme: {
        spaces,
        fontSizes,
        colors
    },
}: GlobalThemeProps) => css`
    body {
      margin: ${spaces[0]};
      color: ${colors.text};
      font-size: ${fontSizes[12]};
    }
  `}
`;
