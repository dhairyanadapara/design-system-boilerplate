import styled, { css } from 'styled-components';
import { GlobalThemeProps } from '../ThemeProvider/global';


export const StyledButton = styled.button.attrs({ type: 'button' })`
  ${({
    theme: {
        radius,
        spaces,
        colors
    }
}: GlobalThemeProps) => css`
    cursor: pointer;
    border-radius: ${radius[6]};
    outline: none;
    padding: ${spaces[0]};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary}
  `}
`;
