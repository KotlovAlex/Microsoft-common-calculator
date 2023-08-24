import React from 'react'
import './Button.css'

interface ButtonProps {
  children: React.ReactNode | string | number | null;
  isEqual?: boolean | null | any;
  onClick?: void | any;
}

function Button({onClick, children, isEqual = false}: ButtonProps) {
  return (
    <div onClick={() => onClick()} className={isEqual ? 'button equal' : 'button'}>
      {children}
    </div>
  )
}

export default Button