import React from 'react';
// import ReactDOM from 'react-dom';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

const App = ()=>{

const todoData = [
{ label: 'Drink cofee', important: false, id: 1 },
{ label: 'Eat meat', important: true, id:2 },
{ label: 'Have a lunch', important: false, id:3 } 
];

	return (
	<div className = 'todo-app'>
		<AppHeader toDo={1} done={3}/>
		<div className="top-panel d-flex">
				<SearchPanel />
				<ItemStatusFilter/>
		</div>
		<TodoList todos={ todoData }/>
	</div>
	);
};

export default App;