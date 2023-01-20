import { createGlobalStyle, css } from 'styled-components';

export interface DefaultTheme {
  spaces: {
    0: string;
    2: string;
    4: string;
    8: string;
    12: string;
    16: string;
  };
  radius: {
    0: string;
    6: string;
    10: string;
  };
  fontSizes: {
    8: string;
    10: string;
    12: string;
    14: string;
    18: string;
    20: string;
  };
  colors: {
    primary: string,
    error: string,
    transparent: string,
    black: string,
    white: string,
    text: string,
    warning: string,
    success: string,
  }
}


export interface GlobalThemeProps {
  theme: DefaultTheme
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
