
import { useState, useEffect } from 'react'
import Message from './Message';

function SimpleForm() {
	
	const [formState, setFormState] = useState({
		userName: 'Guille',
		email: 'guillermo@gmail.com'
	})

	const { userName, email } = formState;


	useEffect(() => {
		// console.log('useEffect called when the component mounts!')
	}, [])

	useEffect(() => {
		// console.log('Email has changed')
	}, [email])

	useEffect(() => {
		// console.log('Name has changed')
	}, [userName])

	
	const onInputChange = ({target}) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value
			
		})
	}

	return (
		<>
			<h1>Form Simple</h1>
			<hr />
			<input
				type="text"
				name="userName"
				placeholder='User Name'
				className='form-control'
				value={userName}
				onChange={onInputChange}

			/>
			<input
				type="email"
				name="email"
				placeholder='User Email'
				className='form-control mt-2'
				value={email}
				onChange={onInputChange}

			/>
			{userName === 'guille' && <Message/>}
		</>
	)
}

export default SimpleForm