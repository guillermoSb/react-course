import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-reducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo"
jest.mock("../../src/hooks/useTodo")
describe('Pruebas en TodoApp', () => { 
	const todos = [{
		id: 1,
		todo: 'Hacer tarea de calculo',
		done: false,
	}, {
		id: 2,
		todo: 'Hacer tarea de fisica',
		done: false,
	}]
	test('Debe de mostrar el componente correctamente', () => { 
		useTodo.mockReturnValue({
			todos, onAddTodo: jest.fn(), onToggleTodo: jest.fn(), onRemoveTodo: jest.fn(), count: 2, pendingCount: 2
		})
		render(<TodoApp />)
		
		expect(screen.getByText("Hacer tarea de calculo"))
		expect(screen.getByText("Hacer tarea de fisica"))
		expect(screen.getByRole('textbox'))
	 })	
})