
'use client'
import React from 'react'

const Button = ({ className, text, handleNavigate, children }) => {
    return (

        <button className={className} onClick={handleNavigate}>
            {children || text}
        </button>

    )
}

export default Button