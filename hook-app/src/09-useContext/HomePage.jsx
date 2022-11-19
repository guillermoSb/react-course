import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'


export const HomePage = () => {
	const {user} = useContext(UserContext)

	return (
		<>
			<h1>Home Page {user?.name}</h1>
			<hr />
			<pre aria-label='pre'>
				{JSON.stringify(user)}
			</pre>
		</>
	)
}
