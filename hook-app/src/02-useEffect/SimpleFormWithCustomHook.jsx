
import { useState, useEffect } from 'react'
import useForm from '../hooks/useForm';
import Message from './Message';

function SimpleFormWithCustomHook() {
	const { formState, onInputChange, userName, email, password, onResetForm } = useForm({
		email: '',
		password: '',
		userName: ''
	});

	return (
		<>
			<h1>Form Simple Con Custom Hook</h1>
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
			<input
				type="password"
				name="password"
				placeholder='Tu Password'
				className='form-control mt-2'
				value={password}
				onChange={onInputChange}

			/>

			<button className='btn btn-primary' onClick={onResetForm} >Reset</button>

		</>
	)
}

export default SimpleFormWithCustomHook