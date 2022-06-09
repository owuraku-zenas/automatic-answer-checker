import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import LoginPage from './views/LoginPage'
import QuestionsPage from './views/QuestionsPage'
import ScorePage from './views/ScorePage'

function AppRouter() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path='/' element={ <LoginPage />} />
              <Route path='/questions' element={<QuestionsPage/>} />
              <Route path='/score' element={ <ScorePage /> } />
              <Route path='*' element={ <h1>Page not Found</h1> } />
          </Routes>
      </Router>
  )
}

export default AppRouter