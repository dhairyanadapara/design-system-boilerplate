import React from 'react';
import { StyledButton } from './StyledButton';

import './Button.css';
import { ButtonProps } from './Button.types';



const Button = ({ text, type, onClick }: ButtonProps) => (
    <StyledButton type="button" className={`Button Button-${type}`} onClick={onClick}>
        {text}
    </StyledButton>
)

export default Button;