
'use client'
import React from 'react'

const Button = ({ className, text, handleNavigate }) => {
    return (
        <button className={className} onClick={handleNavigate}>
            {text}
        </button>
    )
}

export default Button