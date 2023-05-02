import React from 'react'
import { CheckboxProps } from './Checkbox.types'
import './Checkbox.css'

const Checkbox = ({ error, size = "sm", label, disabled, checked, defaultChecked, name, value, id, className, onChange, required, WithoutIcon }: CheckboxProps) => {

    let variantClass = `with-icon-checkbox-primary`;
    let errorClass = `with-icon-checkbox-${error ? "error":""}`
    let sizeClass = `with-icon-checkbox-${size === "sm" ? "sm" : "lg"}`;

    if (WithoutIcon) {
        variantClass = `without-icon-checkbox-primary`;
        errorClass = `without-icon-checkbox-${error ? "error":""}`
        sizeClass = `without-icon-checkbox-${size === 'sm' ? "sm" : "lg"}`
    }

    return (
        <>
            <label className='checkbox-wrapper'>
                <span>
                    <input
                        className={`${variantClass} ${errorClass} ${sizeClass} ${className}`}
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