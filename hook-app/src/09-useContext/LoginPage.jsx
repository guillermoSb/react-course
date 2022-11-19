import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
	const {user, setUser} = useContext(UserContext)
	
	return (
		<>
			<h1>Login Page</h1>
			<hr />
			<pre aria-label='pre'>
				{JSON.stringify(user)}
			</pre>

			<button className='btn btn-primary mt-3' onClick={() => {
				setUser({
					id: 123,
					name: 'Guille',
					email: 'test@example.com'
			})}}>Set User</button>
		</>
	)
}
