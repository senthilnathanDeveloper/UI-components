import React from 'react'
import { TypographyProps } from './Typography.types'
import './Typography.css'
import PropTypes, { InferProps } from 'prop-types';

const Typography = ({ variant = "h1", level, className, children }: TypographyProps) => {

  let Component: keyof JSX.IntrinsicElements;
  if (variant === 'h1') {
    Component = 'h1';
  } else if (variant === 'h2') {
    Component = 'h2';
  } else if (variant === 'h3') {
    Component = 'h3';
  } else if (variant === 'h4') {
    Component = 'h4';
  } else if (variant === 'title1' ? "h5" : "") {
    Component = 'h5';
  } else if(variant ==="title2" ? "h6":""){
    Component = "h6"
  } else if (variant ==="title3" ? "h6":""){
    Component = "h6"
  } else if (variant === "body1" ? 'p':""){
    Component = 'p'
    className =`${className} paragraph1`
  }else if (variant === "body2" ? 'p':""){
    Component = 'p'
    className =`${className} paragraph2`
  }else if(variant ==="label1" ? "label":""){
    Component = 'label'
    className=`${className} label1`
  }else if(variant ==="label2" ? "labe2":""){
    Component = 'label'
    className=`${className} label2`
  }else {
    Component = 'p';
  }




  return (
    <>

      <Component className={`${level} ${className}`}>
        {children}
      </Component>

    </>
  )

}


export default Typography