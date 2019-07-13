import React, { Component } from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import './app.css';
import ItemAddForm from '../item-add-form';

export default class App extends Component {
constructor(){
	super();
	this.maxId = 100;
 	this.state = {
	 todoData: [
		{ label: 'Drink cofee', important: false, id: 1 },
		{ label: 'Eat meat', important: true, id:2 },
		{ label: 'Have a lunch', important: false, id:3 } 
		]
 }

 this.deleteItem = (id)=>{
		this.setState(({ todoData })=>{
			const idx = todoData.findIndex((el)=> el.id===id);
			const newArray = [
				...todoData.slice(0,idx), 
				...todoData.slice(idx + 1)];
				return {
					todoData: newArray
				};
		});
 };
this.addItem = (text) =>{
			//generate id
			const newItem = {
				label: text,
				important: false,
				id: this.maxId++
			};
			//add elem in array
			this.setState(({todoData})=>{
					const newArr = [
						...todoData,
						newItem
					]
					return {
						todoData: newArr
					};
			});
	}
}

render (){
	return (
		<div className = 'todo-app'>
			<AppHeader toDo={1} done={3}/>
			<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter/>
			</div>
			<TodoList todos={ this.state.todoData }
			onDeleted={ this.deleteItem } />
			<ItemAddForm 
			onItemAdded = { this.addItem } />
		</div>
		);
}
} 

