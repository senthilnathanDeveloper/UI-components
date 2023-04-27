import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { MouseEventHandler } from 'react';
export interface ButtonProps extends  React.HTMLAttributes<HTMLElement>  {
    variant?: 'primary' | 'secondary' | 'tertiary'
    size?: 'xs' | 'sm' | 'md'  | 'lg';
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean;
    fullWidth?: boolean;
    rounded?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    label: string;
    className?:string
    value?:string | string[] | number;
    name?:string;
    endIcon?:React.ReactNode;
    startIcon?:React.ReactNode;
}