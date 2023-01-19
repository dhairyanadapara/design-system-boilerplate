import { ChangeEventHandler } from 'react'


export interface InputProps {
    type: 'primary' | 'secondary' | 'error',
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>

}