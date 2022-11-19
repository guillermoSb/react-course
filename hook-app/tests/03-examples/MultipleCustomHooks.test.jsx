import { fireEvent, render, screen } from "@testing-library/react"
import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"


jest.mock('../../src/hooks/useFetch')	// jest will mock this funciton
jest.mock('../../src/hooks/useCounter')


describe('Tests en multiple custom hooks', () => { 
	const increment = jest.fn()
	useCounter.mockReturnValue({ counter: 0, increment, decrement: jest.fn() })

	beforeEach(() => {jest.clearAllMocks()})	// Clear all the mocks
	
	test('Debe mostrar el loading por defecto', () => { 
		useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null })
		render(<MultipleCustomHooks />)
		expect(screen.getByText('Cargando...'))
		const nextBtn = screen.getByRole('button', { name: 'Next Quote' })
		expect(nextBtn.disabled).toBeTruthy()
	})
	

	test('Debe de mostrar un quote', () => { 
		const quote = {author: 'Guille', quote: 'Que dice fshshsh'}
		useFetch.mockReturnValue({ data: [quote], isLoading: false, hasError: null })
		render(<MultipleCustomHooks />)
		const nextBtn = screen.getByRole('button', { name: 'Next Quote' })
		expect(nextBtn.disabled).toBeFalsy()
			
	})

	test('Debe de llamar la funcion de incrementar', () => { 
		const quote = { author: 'Guille', quote: 'Que dice fshshsh' }
		useFetch.mockReturnValue({data:[quote], isLoading: false, hasError: null})
		render(<MultipleCustomHooks />)
		const nextBtn = screen.getByRole('button', { name: 'Next Quote' })
		fireEvent.click(nextBtn)
		expect(increment).toHaveBeenCalled()
	})
})
