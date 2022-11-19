import React from 'react'

export const TodoItem = ({id, todo, onDelete, onToggleTodo, done}) => {
return (
		<li className='list-group-item justify-content-between d-flex' >
		<span
				aria-label='todo-item'
				onClick={() => { onToggleTodo(id) }}
				className={`align-self-center ${done && 'text-decoration-line-through'}`}>{todo}</span>
				<button className="btn btn-danger" onClick={() => {onDelete(id)}} >Eliminar</button>
		</li>
	)
}
