import { getAuthMe } from "./auth_login-reducer";

const SET_SUCCESS = 'SET_SUCCESS';

let initinalState = {
	initialized:false
}

const appReducer = (state = initinalState, action) => {
	switch(action.type) {
		case SET_SUCCESS:
			return {
				...state,
				initialized:true
			}

			default: 
			return state;
	}
}

export const initSuccess = () => ({type:SET_SUCCESS});

export const initApp = () => (dispatch) => {
	let promise = dispatch(getAuthMe());

	Promise.all([promise])
	.then(()=> {
		dispatch(initSuccess())
	});
}

export default appReducer;