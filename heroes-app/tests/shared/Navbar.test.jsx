import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/auth"
import { Navbar } from "../../src/shared";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));


describe('Pruebas para Navbar', () => {
	test('Se muestra el usuario', () => { 
		const contextValue = {
			authState: {
			
					logged: false,
					name: 'Guillermo'
			
				},
		}
		render(
			<AuthContext.Provider value={contextValue}>
					<MemoryRouter>
							<Navbar/>
				</MemoryRouter>
			</AuthContext.Provider>
		)
		expect(screen.getAllByText('Guillermo').length).toBe(1)
	})
	test('Se manda a llamar el metodo de logout del contexto', () => { 
		const logout = jest.fn();
		const contextValue = {
			authState: {
			
					logged: false,
					name: 'Guillermo'
			
			},
			logout
		}
		render(
			<AuthContext.Provider value={contextValue}>
					<MemoryRouter>
							<Navbar/>
				</MemoryRouter>
			</AuthContext.Provider>
		)
		const logoutButton = screen.getByText('Logout');
		fireEvent.click(logoutButton)
		expect(logout).toHaveBeenCalledWith();
	})
	test('Se manda a llamar el metodo de useNavigate al hacer logout', () => {
		const logout = jest.fn();
		const contextValue = {
			authState: {
			
					logged: false,
					name: 'Guillermo'
			
			},
			logout
		}
		render(
			<AuthContext.Provider value={contextValue}>
					<MemoryRouter>
							<Navbar/>
				</MemoryRouter>
			</AuthContext.Provider>
		)
		const logoutButton = screen.getByText('Logout');
		fireEvent.click(logoutButton)
		expect(mockedUsedNavigate).toHaveBeenCalledWith('/login', {replace: true})
	})
})