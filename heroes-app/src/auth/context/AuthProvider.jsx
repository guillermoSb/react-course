import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

export const AuthProvider = ({ children }) => {
	const init = () => {
		const user = JSON.parse(localStorage.getItem('user'));
		return {
			logged: !!user,
			name: user?.name,
		}
	}
	const [authState, dispatch] = useReducer(authReducer, {logged: false}, init)

	const login = (name = '') => {
		const action = {
			type: types.logIn,
			payload: name
		}
		localStorage.setItem('user', JSON.stringify({name}))
		dispatch(action);
	}

	const logout = () => {
		localStorage.removeItem('user');
		const action = {
			type: types.logOut
		}
		dispatch(action);
	}	
	return (
		<AuthContext.Provider value={{login, logout, authState}}>
			{children}
		</AuthContext.Provider>
	)
}
