const { render, screen, fireEvent } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { SearchPage } = require("../../../src/heroes/pages/SearchPage")
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('Pruebas en SearchPage', () => { 
	test('Debe de mostrarse correctamente con valores por defecto', () => {

		const {container} = render(<MemoryRouter>
			<SearchPage/>
			</MemoryRouter>)

			expect(container).toMatchSnapshot()
	})
	test('Debe de mostrar a Batman y el valor en el input', () => {
		const { container } = render(
			<MemoryRouter initialEntries={['/search?q=batman']}>
			<SearchPage/>
			</MemoryRouter>)
		const input = screen.getByPlaceholderText('Search Hero');
		expect(input.value).toBe('batman');
		const img = screen.getByRole('img');
		expect(img.src).toContain('dc-batman.jpg');
	})
	test('debe de mostrar un error si no se encuentra el heroe (batman123)', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=batman123']}>
			<SearchPage/>
			</MemoryRouter>)
		
		expect(screen.getByText('No hero with')).toBeTruthy();
	})

	test('debe de llamar al navigate a la pantalla nueva', () => {
		render(
			<MemoryRouter initialEntries={['/search']}>
			<SearchPage/>
			</MemoryRouter>)
		const input = screen.getByPlaceholderText('Search Hero');
		fireEvent.change(input, { target: { value: 'spider' } });
		const btn = screen.getByRole('button');
		fireEvent.click(btn)
		expect(mockedUsedNavigate).toHaveBeenCalledWith(`?q=${'spider'.trim().toLowerCase()}`)
	})
 })