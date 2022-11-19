import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en el hook useCounter', () => {
	test('Debe de retornar los valores por defecto', () => {
		// Render the hook
		const { result } = renderHook(() => useCounter());
		const { counter, decrement, increment, reset } = result.current;

		expect(counter).toBe(0)
		expect(decrement).toEqual(expect.any(Function))
		expect(increment).toEqual(expect.any(Function))
		expect(reset).toEqual(expect.any(Function))

	})

	test('Debe de tener un 100 en el contador', () => {
		const { result } = renderHook(() => useCounter(100));
		const { counter } = result.current;
		expect(counter).toBe(100)
	})

	test('Increment incrementar el valor', () => {
		const { result } = renderHook(() => useCounter());
		const { counter, decrement, increment, reset } = result.current;
		act(() => {
			increment(2);
		})
		expect(result.current.counter).toBe(counter + 2)
	})

	test('Decrement el valor', () => {
		const { result } = renderHook(() => useCounter());
		const { counter, decrement, increment, reset } = result.current;
		act(() => {
			decrement(2);
		})
		expect(result.current.counter).toBe(counter - 2)
	})

	test('Reset el valor', () => {
		const { result } = renderHook(() => useCounter(2));
		const { counter, reset, increment } = result.current;
		act(() => increment())
		act(() => {
			reset()
		})
		expect(result.current.counter).toBe(counter)
	})

})