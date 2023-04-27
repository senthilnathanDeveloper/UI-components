import { MouseEventHandler } from 'react'

export interface RadioButtonProps {
  name?: string
  value?: string | number
  onClick?: MouseEventHandler<HTMLInputElement>
  aria_Label?: string
  disabled?: boolean
  checked?: boolean
  error?: boolean
  onChange?: any
  onInput?: any
  size?: 'lg' | 'sm'
  id?: string
  className?: string
  required?: boolean
  icon?: boolean
}
