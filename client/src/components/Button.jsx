import clsx from 'clsx'
import React from 'react'

const Button = ({type, label, className, icon, onClick= () => {} }) => {
  return (
    <button type={type}
    className={clsx('px-3 py-2 outline-none cursor-pointer',className)}
    onClick={onClick}
    >
        <span>{label}</span>
        {icon && icon}
    </button>
  )
}

export default Button