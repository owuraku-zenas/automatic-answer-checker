import React from 'react'
import styles from "../styles/Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.nav__bar}>
      <span>Logo</span>
      <button className={styles.logout}>SignOut</button>
    </div>
  )
}

export default Navbar