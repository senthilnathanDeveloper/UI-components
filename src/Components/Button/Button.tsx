import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.css';



export const Button = ({ variant = 'primary', size = 'xs', type, disabled, fullWidth, onClick, rounded, startIcon, endIcon, label, className, value, name}: ButtonProps) => {
  const classes = `${variant} ${size} ${fullWidth ? 'full-width' : ""} ${rounded ? 'rounded' : ""} ${className}`

  return (
    <div>
      <button type={type} className={[classes].join(' ')} onClick={onClick} disabled={disabled} name={name} value={value} >

        {startIcon}

        {label}

        {endIcon}

      </button>
    </div>
  );
};