import React, { useEffect, useRef } from 'react'
import { CheckboxProps } from './Checkbox.types'
import './Checkbox.css'

const Checkbox = ({ variant = 'primary', size = "sm", label, disabled, checked, defaultChecked, name, value, id, className, onChange, required, icon }: CheckboxProps) => {
    // const ref = useRef<HTMLInputElement>(null)
    let variantClass = `with-icon-checkbox-${variant === 'primary' ? "primary" : "error"}`;
    let sizeClass = `with-icon-checkbox-${size === "sm" ? "sm" : "lg"}`;

    if (icon) {
        variantClass = `without-icon-checkbox-${variant === "primary" ? "primary" : "error"}`
        sizeClass = `without-icon-checkbox-${size === 'sm' ? "sm" : "lg"}`
    }


    useEffect(() => {
        window.addEventListener("keydown",handleCheckbox)
     },[])
  
     const handleCheckbox = (e:any) => {
      if(e.key ==="Enter"){
       
        // ref?.current?.classList.add("add-circle")
        // console.log("ref",ref)
      }
    }
    return (
        <>
            <label className='checkbox-wrapper'>
                <span>
                    <input
                        className={`${variantClass} ${sizeClass} ${className}`}
                        type="checkbox"
                        disabled={disabled}
                        checked={checked}
                        defaultChecked={defaultChecked}
                        name={name}
                        value={value}
                        id={id}
                        onChange={onChange}
                        required={required}
                        
                    />
                </span>
                <span className='checkbox-label'>{label}</span>
            </label>
        </>
    )
}

export default Checkbox