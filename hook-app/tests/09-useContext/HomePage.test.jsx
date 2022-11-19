import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"

describe('Tests en Home page', () => { 
	const user = {
		id: 1,
		name: 'Guille'
	}
	test('Debe de mostrar el componente correctamente', () => { 
		
		render(<UserContext.Provider value={{user: null}}>
			<HomePage/>
		</UserContext.Provider>)
		const preTag = screen.getByLabelText('pre')
		expect(preTag.innerHTML).toBe('null')
	})
	
	test('Debe de mostrar el usuario en el pre', () => { 
		
		render(<UserContext.Provider value={{user}}>
			<HomePage/>
		</UserContext.Provider>)
		const preTag = screen.getByLabelText('pre')
		expect(preTag.innerHTML).toBe(JSON.stringify(user))
	 })
 })