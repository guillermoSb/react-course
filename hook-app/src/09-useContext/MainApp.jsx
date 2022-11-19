import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { UserProvider } from './context/UserProvider'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'

export const MainApp = () => {
	return (
		<UserProvider>
			<h1>Main App</h1>
			<NavBar />
			<hr />
			<Routes>
				<Route path={"/"} element={<HomePage/>} />
				<Route path='login' element={<LoginPage />} />
				<Route path='about' element={<AboutPage />} />
				{/* <Route path='/*' element={<LoginPage/>}/> */}

				{/* Navegar a la ruta /login */}
				<Route path='/*' element={<Navigate to="/login"/>} />
			</Routes>
		</UserProvider>
	)
}
