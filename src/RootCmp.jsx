import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { CarIndex } from './pages/CarIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminIndex } from './pages/AdminIndex.jsx'

// import { CarDetails } from './pages/CarDetails'
import { UserDetails } from './pages/UserDetails'

import { AppHeader } from './cmps/AppHeader'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'
import { BoardIndex } from './pages/BoardIndex.jsx'
import { BoardDetails } from './cmps/BoardDetails.jsx'
import { Sidebar } from './cmps/Sidebar.jsx'

export function RootCmp() {
    return (
        <div className='main-container'>
            <AppHeader />
            <UserMsg />

            <Sidebar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='board' element={<BoardIndex />} />
                {/* <Route path='board/details' element={<BoardDetails />} /> */}
                <Route path='board/:boardId' element={<BoardDetails />} />
                <Route path='user/:id' element={<UserDetails />} />
                <Route path='review' element={<ReviewIndex />} />
                <Route path='chat' element={<ChatApp />} />
                <Route path='admin' element={<AdminIndex />} />
                <Route path='login' element={<LoginSignup />}>
                    <Route index element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                </Route>
            </Routes>
            {/* <AppFooter /> */}
        </div>
    )
}
