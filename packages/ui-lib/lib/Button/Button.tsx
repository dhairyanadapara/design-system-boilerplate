import React from 'react';
import { StyledButton } from './StyledButton';
import { ButtonProps } from './Button.types';



const Button = ({ text, onClick }: ButtonProps) => (
    <StyledButton type="button" onClick={onClick}>
        {text}
    </StyledButton>
)

export default Button;