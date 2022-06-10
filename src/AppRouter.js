import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CoursesPage from './views/admin_views/CoursesPage'
import Navbar from './components/Navbar'
import LoginPage from './views/LoginPage'
import QuestionsPage from './views/QuestionsPage'
import RequireAuth from './views/RequireAuth'
import ScorePage from './views/ScorePage'

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Testing Routes */}
                <Route path='/admin/courses' element={ <CoursesPage /> } />
                <Route path='/questions' element={<QuestionsPage />} />

                {/* General Routes */}
                <Route path='/' element={<LoginPage />} />
                {/* TODO Create a better 404 Page and an unauthorized page*/}
                <Route path='/unauthorized' element={<h1>unauthorized</h1>} />
                <Route path='*' element={<h1>Page not Found</h1>} />

                <Route element={<RequireAuth allowedRole={"student"} />}>
                    {/* Student Routes */}
                    <Route path='/questions' element={<QuestionsPage />} />
                    <Route path='/score' element={<ScorePage />} />
                </Route>
                <Route element={<RequireAuth allowedRole={"admin"} />}>
                    {/* TODO Admin Routes */}
                    <Route path='/admin/courses' element={ <CoursesPage /> } />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter