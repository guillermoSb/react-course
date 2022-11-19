import React from 'react'
import {TodoItem} from './TodoItem'

export const TodoList = ({ todos, onRemoveTodo, onToggleTodo }) => {

	return (
		<ul className='list-group'>
				{/* Todo Item */}
				{todos.map((todo) => (<TodoItem {...todo} key={todo.id} onDelete = {onRemoveTodo} onToggleTodo={onToggleTodo} />))}
				{/* Todo Item */}
		</ul>
	)
}
