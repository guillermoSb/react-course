import { todoReducer } from "../../src/08-reducer/todoReducer"

describe('Pruebas en el todoReducer', () => {


	const initialState = [{
		id: 1,
		description: 'Esta es un todo',
		done: false
	}]

	test('Debe de regresar el estado inicial', () => {
		const newState = todoReducer(initialState, {})
		expect(newState).toEqual(initialState)
	})

	test('Debe de agregar un nuevo todo', () => {
		const action = {
			type: 'add',
			payload: {
				id: 2,
				description: 'Esta es otra tarea',
				done: false
			}
		}
		const newState = todoReducer(initialState, action)
		expect(newState.length).toBe(2)
		expect(newState).toContain(action.payload)
	})


	test('Debe de eliminar un todo', () => {
		const action = {
			type: 'remove',
			payload: 1
		}
		const newState = todoReducer(initialState, action)
		expect(newState.length).toBe(0)
	})

	test('Debe de cambiar el estado de una tarea', () => {
		const newState = todoReducer(initialState, { type: 'toggle', payload: 1 })
		expect(newState).toContainEqual({ ...initialState[0], done: true })
	})
})