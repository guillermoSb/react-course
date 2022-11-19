import { render, screen } from "@testing-library/react"
import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PrivateRoute } from "../../src/router/PrivateRoute"

describe('Pruebas en PrivateRoute', () => {
	test('Debe de mostrar el children si esta autenticado', () => {
		Storage.prototype.setItem = jest.fn();
		const contextValue = {
			authState: {
				logged: true,
				user: 'Guillermo'
			}
		}
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/marvel']}>
					<Routes>
						<Route path='/*' element={<Navigate to="/marvel" />} />
						<Route path="marvel" element={
							<PrivateRoute>
								<h1>MARVEL</h1>
							</PrivateRoute>
						} />
						<Route path="login" element={
								<h1>Login</h1>
						} />

					</Routes>
				</MemoryRouter>
			</AuthContext.Provider>
		)
		expect(screen.getByText('MARVEL')).toBeTruthy();
		expect(localStorage.setItem).toHaveBeenCalledWith("lastPath",'/marvel')
	})
})