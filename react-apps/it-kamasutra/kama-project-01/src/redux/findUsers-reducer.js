const aTypeFollow = 'FOLLOW';
const aTypeUnFollow = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_TOTAL_PEOPLE = 'SET_TOTAL_PEOPLE';


let initinalState = {
	usersData:[	],
	pageSize: 100,
	currentPage: 1,
	totalPeople: null,
	isFetching: true,
	totalPages: 0
}

const findUsersReducers = (state = initinalState,action) => {
	switch(action.type) {
		case aTypeFollow : 
				return {
					...state,
					usersData: state.usersData.map(u => {
						if(u.id === action.userId) {
							return {...u, followed: true}
						}
						return u;
					})
			}
		case aTypeUnFollow : 
				return {
					...state,
					usersData: state.usersData.map(u => {
						if(u.id === action.userId) {
							return {...u, followed: false}
						}	
						return u;
					})
			}

			case SET_USERS: {
				return {
					...state, usersData: [...action.usersData]
				}
			}

			case SET_CURRENT_PAGE: {
				return {
					...state, currentPage: action.currentPage
				}
			}

			case TOGGLE_IS_FETCHING: {
				return {
					...state, totalPages: action.totalPages
				}
			}
			case SET_TOTAL_PEOPLE: {
				return {
					...state, totalPeople: action.totalPeople
				}
			}

		default:
			return state;
		
	}
}

export const onFollow = (userId) => ({ type: aTypeFollow, userId });
export const unFollow = (userId) => ({ type: aTypeUnFollow, userId });
export const setUsers = (usersData) => ({ type: SET_USERS,usersData });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE,currentPage:page });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING,isFetching });
export const setTotalPeople = (totalPeople) => ({ type: SET_TOTAL_PEOPLE,totalPeople });

export default findUsersReducers;