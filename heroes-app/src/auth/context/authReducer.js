import { types } from "../types/types";

export const authReducer = (state, action) => {
	switch (action.type) {
		case types.logIn:
			return {
				...state,
				logged: true,
				name: action.payload
			};
		case types.logOut:
			return {
				logged: false,
			};
		default:
			return state;
			break;
	}
}