import React from 'react'
import { CheckboxGroupsProps } from './Checkbox.types'
import './Checkbox.css'

const CheckboxGroup = ({children,direction}:CheckboxGroupsProps) => {
  return (
   <>
    <div className={`${direction ==='vertical' ? "vertical":"horizontal"}`}>{children}</div>
   </>
  )
}

export default CheckboxGroup