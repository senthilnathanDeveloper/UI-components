import React from 'react'
import { ToggleProps } from './Toggle.types'
import './toggle.css'

const Toggle = ({ size = "lg", checked, onChange, disabled, defaultChecked, value, id, name, className ,required,withIcon,withWords}: ToggleProps) => {

    let toggleButton = `toggle-without-icon`;
    let toggleSizeClass = `toggle-without-icon-${size === "lg" ? "lg" : "sm"}`

    if(withIcon){
        toggleButton = `toggle-with-icon`
    }else if(withWords){
        toggleButton="toggle-with-words"
    }
    return (
        <>
            <div className="check-box">
                <input 
                type="checkbox" 
                className={`${toggleButton} ${toggleSizeClass} ${className}`} 
                checked={checked}
                disabled={disabled}
                name={name}
                value={value}
                id={id}
                onChange={onChange}
                required={required}
                defaultChecked={defaultChecked}
                />
            </div>


        </>
    )
}

export default Toggle