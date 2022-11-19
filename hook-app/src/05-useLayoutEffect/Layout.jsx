import React from 'react'
import { useFetch,useCounter  } from '../hooks'
import LoadingQuote from '../03-examples/LoadingQuote';
import { Quote } from '../03-examples/Quote';


function Layout() {

	
	const {counter, increment, decrement,reset} = useCounter(1)

	const { isLoading, data, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
	
	const { quote, author } = !!data && data[0];	// If the data has a value, then use the first one

	return (
		<>
			<h1>Breaking Bad Quotes #{counter}</h1>
			<hr />
			{isLoading ?
				<LoadingQuote/>
				:
				<Quote author={author} quote={quote} />
			}
			<button className="btn btn-primary" disabled={isLoading || counter == 1} onClick={() => {decrement()}}>Prev Quote</button>
			<button className="btn btn-primary" disabled={isLoading} onClick={() => { increment() }}>Next Quote</button>
			<button className="btn btn-primary" disabled={isLoading} onClick={() => { reset() }}>Reset</button>
		</>
	)
}

export default Layout