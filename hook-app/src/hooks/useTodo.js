import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-reducer/todoReducer'

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos])

	const onAddTodo = (todo) => {
		const action = {
			type: 'add',
			payload: todo
		}
		dispatch(action)
	}

	const onRemoveTodo = (id) => {
		const action = {
			type: 'remove',
			payload: id
		}
		dispatch(action)
	}

	const onToggleTodo = (id) => {
		const action = {
			type: 'toggle',
			payload: id
		}
		dispatch(action)
	}

	return {
		todos,
		onAddTodo,
		onRemoveTodo,
		onToggleTodo,
		count: todos.length,
		pendingCount: todos.filter(t => !t.done).length
	}
}
