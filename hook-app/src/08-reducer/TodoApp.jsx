import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm.jsx'
import { useTodo } from '../hooks'

export const TodoApp = () => {
	const {todos, onAddTodo, onToggleTodo, onRemoveTodo, count, pendingCount} = useTodo()


	return (
		<>
			<h1>TodoApp {count}, <small>pendientes: {pendingCount}</small></h1>
			<hr />
			<div className="row">
				<div className="col-7">
					{/* TODO LIST */}
					<TodoList todos={todos} onRemoveTodo = {onRemoveTodo} onToggleTodo={onToggleTodo} />
					{/* TODO LIST */}
				</div>
				<div className="col-5">
					<h4>Agregar Todo</h4>
					<hr />
					{/* Todo Form onNewTodo */}
					<TodoForm onAddTodo={onAddTodo} />
					{/* Todo Form */}
				</div>
			</div>
		</>
	)
}
