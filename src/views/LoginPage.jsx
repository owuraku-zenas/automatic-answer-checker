import axios from '../api/axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import styles from "../styles/LoginPage.module.css";
import TestContext from '../context/TestProvider';
import useAuth from '../hooks/useAuth';




function LoginPage() {

  const [userID, setUserID] = useState("")
  const [password, setPassword] = useState("")
  const [type, setType] = useState("")
  const [isStudent, setIsStudent] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()
  const LOGIN_URL = '/auth'
  const GET_TEST_URL = '/get_test'

  const { setAuth } = useAuth()
  const { setScore } = useContext(AuthContext)
  const { setQuestions } = useContext(TestContext)

  const formHandler = async (event) => {
    event.preventDefault()

    if (type === "student") {
      //TODO: Get student Questions and redirect to questions page
      //TODO Verify Request & Response Stucture
      try {
        const response = await axios.post(
          GET_TEST_URL,
          JSON.stringify({ password }),
          {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          }
        )

        const isCompleted = response?.data?.isCompleted
        const role = "student"
        setAuth({ userID, password, role })

        if (!isCompleted) {
          const questions = response?.data?.questions
          setQuestions(questions)
          navigate("/questions")
        } else {
          const result = response?.data?.result
          setScore(result)
          navigate("/score")
        }
      } catch (error) {
        if (!error?.response) {
          setErrorMessage("No Server Response")
        } else if (error.response?.status === 400) {
          setErrorMessage("Missing Test Code")
        } else if (error.response?.status === 400) {
          setErrorMessage("Unauthorized")
        } else {
          setErrorMessage("There was a problem with finding test.")
        }
      }
    } else {
      try {
        const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({ userID, password }),
          {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          }
        )

        const accessToken = response?.data?.accessToken
        const role = "admin"

        setAuth({ userID, password, role, accessToken })
        //TODO: Redirect to Admin Page
        navigate("/admin/tests")

      } catch (error) {
        if (!error?.response) {
          setErrorMessage("No Server Response")
        } else if (error.response?.status === 400) {
          setErrorMessage("Missing Username or Password")
        } else if (error.response?.status === 400) {
          setErrorMessage("Unauthorized")
        } else {
          setErrorMessage("There was a problem with your login.")
        }
      }

      console.log(errorMessage);
    }



  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.auth__area}>
        <div className={styles.header}>
          <h2>Automatic Answer Checker</h2>
        </div>
        {
          errorMessage ? <div className={styles.error}> {errorMessage} </div> : null
        }

        <form action="" className={styles.form} onSubmit={formHandler}>
          <input
            className={styles.input}
            type="text"
            placeholder={isStudent ? "Student ID" : "Staff ID"}
            value={userID}
            onChange={(e) => {
              setUserID(e.target.value)

            }}
            required
          />
          <input className={styles.input}
            type={isStudent ? "text" : "password"}
            placeholder={isStudent ? "Test Code" : "PIN"}
            value={password}
            onChange={
              (e) => {
                setPassword(e.target.value)
              }
            }
            required
          />
          <select
            className={styles.input}
            name=""
            id=""
            value={type}
            onChange={
              (e) => {
                setType(e.target.value)
                if (e.target.value === "student") {
                  setIsStudent(true)
                } else {
                  setIsStudent(false)
                }
              }

            }
            required
          >
            <option className={styles.placeholder} value="" disabled selected hidden>Select User Type</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className={styles.login}>{isStudent ? "Start Test" : "Login"}</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage