import React from 'react'
import useForm from '../hooks/useForm';

export const TodoForm = ({onAddTodo}) => {
	const {todo, onInputChange, onResetForm} = useForm({todo: ''})

	return (
			<form>
				<input value={todo} onChange={onInputChange} name="todo" type="text"  className='form-control' placeholder='Que hacemos?' />
			<button onClick={(e) => {
					e.preventDefault(); 
					if (todo.trim().length <= 0) return
					onAddTodo({
					id: (new Date()).getTime(),
					todo,
					done: false
					})
					onResetForm()
				}}
				className="btn btn-primary mt-2">Submit</button>
			</form>
	)
}
