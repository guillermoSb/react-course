import { screen, render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en el Auth Router', () => { 
	test('Debe de mostrar el login si no esta autenticado', () => { 
		const contextValue = {
			authState: {
				logged: false
			}
		}
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/marvel']}>
						<AppRouter/>
				</MemoryRouter>
			</AuthContext.Provider>
		)
		expect(screen.getAllByText('Login').length).toBeGreaterThan(1)
	})
	test('Debe de mostrar el componente de marvel si esta auth', () => { 
		const contextValue = {
			authState: {
				logged: true
			}
		}
		render(
					<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/login']}>
						<AppRouter/>
				</MemoryRouter>
					</AuthContext.Provider>
		)
		expect(screen.getAllByText('Marvel').length).toBe(1)
	 })
 })