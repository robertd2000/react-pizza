import React from 'react'

const Button = ({ className, children, outline }) => {
  return (
    <button
      className={'button ' + className + (outline ? 'button--outline' : '')}
    >
      {children}
    </button>
  )
}

export default Button
