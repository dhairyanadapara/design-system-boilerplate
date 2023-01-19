import React from 'react';


import './Input.css';
import { InputProps } from './Input.types';



const Input = ({  type, placeholder, onChange }: InputProps) => (
    <input type="text" placeholder={placeholder} className={`Input Input-${type}`} onChange={onChange}/>
        
)

export default Input;