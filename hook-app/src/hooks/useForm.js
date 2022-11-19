import React, { useState } from 'react'

function useForm(initialForm = {}) {
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

export default useForm