import React, { FC } from 'react'

import './RadioButton.css'
import { RadioButtonProps } from './RadionButton.types'


const RadioButton: FC<RadioButtonProps> = ({
  aria_Label,
  name,
  value,
  disabled,
  checked,
  error,
  onInput,
  onChange,
  size,
  onClick,
  id,
  className,
  required,
  icon,
}) => {
  let sizeClass = `radio-without-icon-${size === 'lg' ? 'large' : 'small'}`

  let disabledAndErrorClass = `radio-without-icon-${
    disabled ? 'disabled' : `enabled${error ? '-error' : ''}`
  }`
  let radioIconClass = 'radio-without-icon'
  if (icon) {
    radioIconClass = 'radio-with-icon'
    sizeClass = `radio-with-icon-${size === 'lg' ? 'large' : 'small'}`
    disabledAndErrorClass = `radio-with-icon-${
      disabled ? 'disabled' : `enabled${error ? '-error' : ''}`
    }`
  }

  
  return (
    <input
      className={`radio ${radioIconClass} ${sizeClass} ${disabledAndErrorClass} ${className}`}
      type="radio"
      value={value}
      name={name}
      id={id}
      aria-label={aria_Label}
      onInput={onInput}
      tabIndex={disabled ? -1 : 0}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      onClick={onClick}
      required={required}
    />
  )
}

export default RadioButton
