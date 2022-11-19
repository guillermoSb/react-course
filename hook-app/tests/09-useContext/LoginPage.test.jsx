import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('Pruebas en la Login Page', () => { 
		const user = {
					id: 123,
					name: 'Guille',
					email: 'test@example.com'
			}
	const setUserMock = jest.fn()
	beforeEach(() => jest.clearAllMocks)
	test('Debe de renderizar correctamente', () => { 
		render(
			<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
				<LoginPage/>
			</UserContext.Provider>
		)
		const button = screen.getByRole('button')
		expect(button)
	})
	test('Debe de llamar al metodo setUser', () => { 
		render(
			<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
				<LoginPage/>
			</UserContext.Provider>
		)
		const button = screen.getByRole('button')
		fireEvent.click(button)
		expect(setUserMock).toHaveBeenCalledWith(user)
	})

	test('Debe de renderizar correctamente', () => { 
		render(
			<UserContext.Provider value={{ user, setUser: setUserMock }}>
				<LoginPage/>
			</UserContext.Provider>
		)
		const preTag = screen.getByLabelText('pre')
		expect(preTag.innerHTML).toEqual(JSON.stringify(user))
	})
	
 })