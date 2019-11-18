import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer'; 
import findUsersReducer from './findUsers-reducer';
import authLoginReducer from './auth_login-reducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer, 
	navbarPage: navbarReducer,
	findUsersPage: findUsersReducer,
	authLogin: authLoginReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
