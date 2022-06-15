import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import styles from "../styles/Navbar.module.css"

function Navbar() {

  const { auth } = useAuth()
  const navigate = useNavigate()

  if (!auth?.user) {
    return null;
  }

  return (
    <div className={styles.nav__bar}>
      <span className={styles.span}
        onClick={
          () => {
            // TODO Admin goes editing questions and student goes to questions
            if (auth?.role === "student") {
              navigate("/questions")
            } else if(auth?.role === "admin") {
              navigate("/admin/tests")
            } else {
              navigate("/")
            }
          }
        }
      >
        💯
      </span>
      {/* TODO Change Button Text to fit user type whether logout or end test */}
      {
        auth?.user
          ? <button className={styles.logout}> {auth?.role === "student" ? "End Test" : "Sign Out"} </button>
          : null
      }
    </div>
  )
}

export default Navbar