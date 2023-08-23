import React from 'react'
import './Button.css'

interface ButtonProps {
  children: React.ReactNode | string | number | null;
  isEqual?: boolean | null | any;
}

function Button({children, isEqual = false}: ButtonProps) {
  return (
    <div className={isEqual ? 'button equal' : 'button'}>
      {children}
    </div>
  )
}

export default Button