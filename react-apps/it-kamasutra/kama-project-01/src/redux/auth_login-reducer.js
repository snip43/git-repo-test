const GET_USER_DATA = 'GET_USER_DATA';


const initinalState = {
	data: {
		id: null,
		email: null,
		login: null,
		isAuth: false
	}
}

const authLoginReducer = (state = initinalState, action) => {
	switch(action.type) {
		case GET_USER_DATA:
			return {
					...state,
					data: {
						...action.data,
						isAuth: true
					}
			
				}
					
			default:
				return	state;
	}
}

export const setUserDataAC = (userId,email,login) => ({type:GET_USER_DATA,data:{userId,email,login}})

export default authLoginReducer;