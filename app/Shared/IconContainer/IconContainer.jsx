import React from 'react'
import styles from "./IconContainer.module.css"
const IconContainer = ({ children, bg }) => {
    return (
        <span
            style={{ background: bg }}
            className={styles.iconCont}
        >{children}</span>
    )
}

export default IconContainer