import React from 'react'
import styles from "./innercontainer.module.css"

const Innercontainer = ({ children }) => {
  return (
    <div className={styles.innercontainer}>
      {children}
    </div>
  )
}

export default Innercontainer
