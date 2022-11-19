import React, { useEffect, useState } from 'react'

function Message() {

	const [coords, setCoords] = useState({x: 0, y: 0})

	useEffect(() => {
		const onMouseMove = ({ x, y }) => {
			setCoords({x,y})
		}

		window.addEventListener('mousemove', onMouseMove)
	
		return () => {
			// console.log('Message unmounted')
			window.removeEventListener('mousemove', onMouseMove)
		}
	}, [])
	
	return (
		<>
			<h3>Usuario ya existe</h3>
		</>
	)
}

export default Message