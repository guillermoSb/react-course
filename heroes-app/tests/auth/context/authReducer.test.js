import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Tests on AuthReducer', () => {
	test('debe de retornar el estado por defecto', () => {
		const state = {
			logged: false,
			name: null
		}
		const newState = authReducer(state, {});
		expect(newState).toEqual(state);
	})
	test('Debe de hacer un login', () => {
		const state = {
			logged: false
		}
		const newState = authReducer(state, {
			type: types.logIn,
			payload: 'Guillermo'
		});
		expect(newState.logged).toBeTruthy();
		expect(newState.name).toBe('Guillermo');
	})
	test('Debe de hacer un logout', () => {
		const state = {
			logged: true,
			name: 'Guillermo'
		}
		const newState = authReducer(state, {
			type: types.logOut,
		});
		expect(newState.logged).toBeFalsy();
		expect(newState.name).toBeUndefined();
	})
});