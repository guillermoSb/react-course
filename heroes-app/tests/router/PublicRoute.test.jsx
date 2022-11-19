import { render, screen } from "@testing-library/react"
import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('Pruebas en PublicRoute', () => {
	test('Debe de mostrar el children si no esta autenticado', () => {
		const contextValue = {
			authState: {
				logged: false
			}
		}
		render(
			<AuthContext.Provider value={contextValue}>
				<PublicRoute>
					<h1>Ruta Publica</h1>
				</PublicRoute>
			</AuthContext.Provider>
		)
		expect(screen.getByText('Ruta Publica')).toBeTruthy();
	})
	test('Debe de mostrar el navigate cuando esta autenticado', () => {
		const contextValue = {
			authState: {
				logged: true,
				user: 'Guillermo'
			}
		}
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/login']}>
					<Routes>
						<Route path='/*' element={<Navigate to="/marvel" />} />
						<Route path="marvel" element={<h1>MARVEL</h1>} />
						<Route path="login" element={
							<PublicRoute>
								<h1>Ruta Publica</h1>
							</PublicRoute>
						} />

					</Routes>
				</MemoryRouter>
				
			</AuthContext.Provider>
		)
		expect(screen.getByText('MARVEL')).toBeTruthy();
	})
})