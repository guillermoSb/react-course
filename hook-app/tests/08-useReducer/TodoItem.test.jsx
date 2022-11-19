import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-reducer/TodoItem";

describe('Pruebas en el componente', () => { 
	const todo = {
		id: 1,
		todo: 'Hacer tarea de calculo',
		done: false,
	}
	const onDeleteTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();


	beforeEach(() => {jest.clearAllMocks()})

	test('Debe de mostrar el todo pendiente', () => {
		render(
			<TodoItem {...todo} onDelete={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>
		)
		const li = screen.getByRole('listitem');
		expect(li.className).toEqual('list-group-item justify-content-between d-flex')
		const spanElement = screen.getByLabelText('todo-item')
		expect(spanElement.className).not.toContain('text-decoration-line-through')
	})

	test('Debe de mostrar el todo completado', () => {
		todo.done = true
		render(
			<TodoItem {...todo} onDelete={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>
		)
		const li = screen.getByRole('listitem');
		expect(li.className).toEqual('list-group-item justify-content-between d-flex')
		const spanElement = screen.getByLabelText('todo-item')
		expect(spanElement.className).toContain('text-decoration-line-through')
	})

	test('span debe de llamar al toggletodo cuando se le de click', () => { 
		render(
			<TodoItem {...todo} onDelete={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>
		)
		const spanElement = screen.getByLabelText('todo-item')
		fireEvent.click(spanElement)
		expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
	})
	
	test('El boton debe de llamar onDelete', () => { 
		render(
			<TodoItem {...todo} onDelete={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>
		)
		const buttonElement = screen.getByRole('button', {name: 'Eliminar'})
		fireEvent.click(buttonElement)
		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
	 })
 })