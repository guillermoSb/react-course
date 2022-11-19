import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'


export const CallbackHook = () => {
	const [counter, setCounter] = useState(0)

	// This function always has a different memory position
	// const increment = () => {
	// 	setCounter(counter + 1)
	// }

	const increment = useCallback(
			() => {
			setCounter((value) => value + 1);
			},
			[]
		)
		

	return (
		<>
			<h1>UseCallbackHook {counter}</h1>
			<hr />
			<ShowIncrement onClick={increment}/>
		</>
	)
}
