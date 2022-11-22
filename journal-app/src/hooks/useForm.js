import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm)

	// {
	// 	userName: 'Guille',
	// 		email: 'guillermo@gmail.com',
	// 			password: ''
	// }

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value

		})
	}
	const onResetForm = () => {
		setFormState(initialForm)
	}

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm
	}
}
