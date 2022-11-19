import React, { useState } from 'react'
import { UserContext } from './UserContext'

// This component receives children components
const user = {
	id: 1,
	email: 'text@example.com',
	name: 'Test User'
}
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({})

	return (
		<UserContext.Provider value={{user, setUser}}>
			{children}
		</UserContext.Provider>
	)
}
