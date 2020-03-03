import * as types from "./actionTypes";

//step 1: decide state slices
const initialState = {
    user: {
        id:0,
        username: "",
        password: "",
    },
	listings:[]
};


//step 3: create reducers
export function userReducer(user = initialState.user, action) {
	switch (action.type) {
		case types.REGISTER:
			return action.payload.user;
		case types.LOGIN:
			return user;
		case types.UPDATE_USER:
			return user;
		case types.DELETE_USER:
			return user;
		default:
			return user;
	}
}

//step 3: create reducers
export function listReducer(
	list = initialState.list,
	action
) {
	switch (action.type) {
		case types.CREATE_LIST:
			return action.payload.list;
		case types.READ_LIST:
			return list;
		case types.UPDATE_LIST:
			return list;
		case types.DELETE_LIST:
			return list;
		default:
			return list;
	}
}