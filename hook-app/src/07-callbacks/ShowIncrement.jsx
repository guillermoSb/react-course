import React from 'react'

export const ShowIncrement = React.memo(({ onClick }) => {
	console.log('me volvi a generar')
	return (
		<button className='btn btn-primary mt-2' onClick={() => {onClick()}}>+1</button>
	)
})
