import React from 'react'
import { useCounter } from '../hooks/useCounter'

function CounterWithCustomHook() {
	const {counter,increment, decrement, reset} = useCounter(0)
	return (
		<>
			<h1>Counter with Hook: {counter}</h1>
			<hr />
			<button onClick={() => {increment(10)}} className='btn btn-primary'>+1</button>
			<button onClick={reset} className='btn btn-primary'>Reset</button>
			<button onClick={() => {decrement(10)}} className='btn btn-primary'>-1</button>
		</>
	)
}

export default CounterWithCustomHook