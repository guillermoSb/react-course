import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import useForm from "../../src/hooks/useForm"

describe('Tests en useForm', () => {
	const initialForm = {
		email: 'guillermo.santosba@gmail.com',
		password: 'abcds'
	}
	test('Debe de regresar los valores por defecto', () => {
		const { result } = renderHook(() => useForm(initialForm))
		expect(result.current).toEqual({
			email: initialForm.email,
			password: initialForm.password,
			formState: initialForm,
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function)
		})
	})

	test('Debe de cambiar el email del form', () => {
		const { result } = renderHook(() => useForm(initialForm))
		const { onInputChange } = result.current;
		act(() => { onInputChange({ target: { value: 'example', name: 'email' } }) })
		expect(result.current.email).toEqual('example')
	})

	test('Debe de realizar el reset del formulario', () => {
		const { result } = renderHook(() => useForm(initialForm))
		const { onInputChange, onResetForm } = result.current;
		act(() => { onInputChange({ target: { value: 'example', name: 'email' } }) })
		act(() => onResetForm())
		expect(result.current.email).toBe(initialForm.email)
	})
})