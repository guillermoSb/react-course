import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Pruebas en el MainApp', () => { 
	test('Debe de mostrar el HomePage', () => {
		render(
			<MemoryRouter>
				<MainApp />
				</MemoryRouter>
		)
		expect(screen.getByText('Home Page',)).toBeTruthy();
	})

	test('Debe de mostrar el Login', () => {
		render(
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
				</MemoryRouter>
		)
		expect(screen.getByText('Login Page',)).toBeTruthy();
	})
 })