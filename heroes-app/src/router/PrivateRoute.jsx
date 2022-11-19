import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth'

export const PrivateRoute = ({ children }) => {
	const { pathname, search } = useLocation();
	const lastPath = pathname + search;
	localStorage.setItem('lastPath', lastPath)

	const { authState } = useContext(AuthContext);	
	return (authState.logged) ? children : <Navigate to={'/login'}></Navigate>
	
}
