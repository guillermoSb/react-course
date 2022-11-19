import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (iterations = 100) => {
	for (let index = 0; index < iterations; index++) {
		console.log('Ahi vamos...')
		
	}
	return `${iterations} iteraciones realizadas`
}

export const MemoHook = () => {

	const { counter, increment } = useCounter(4000)
	const [show, setShow] = useState(true)
	const memorizedValue = useMemo(() => heavyStuff(counter), [counter])	// Memorize the value only if the counter changes
	return (
			<>
			<h1>Counter <small>{ counter}</small></h1>
			<hr />
			<h4>{memorizedValue}</h4>
			<button className='btn btn-primary' onClick={() => { increment() }}>+1</button>
			<button className='btn btn-outline-primary' onClick={() => {setShow(!show)}}>show / hide {JSON.stringify(show)}</button>
		</>
	)
}
