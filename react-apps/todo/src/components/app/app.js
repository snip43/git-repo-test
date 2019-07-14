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
		this.createTodoItem('Drink Coffee') ,
		this.createTodoItem('Eat Meat'),
		this.createTodoItem('Have alunch')
		]
 }

}

createTodoItem(label){
	return{
		label,
		important: false,
		done: false,
		id:this.maxId++
	}
}

deleteItem = (id)=>{
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

addItem = (text) =>{
		//generate id
		const newItem = this.createTodoItem(text);
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

toggleProperty(arr, id, propName) {
	const idx = arr.findIndex((el)=> el.id===id);
	// 1.update object
		const oldItem = arr[idx];
		const newItem = { ...oldItem,
			[propName]: !oldItem[propName]
		}
	// 2.construct newArray
				return [
					...arr.slice(0, idx), 
					newItem,
					...arr.slice(idx + 1)
					];
		}

onToggleDone = (id) => {
	this.setState(({ todoData }) => {
		return {
			todoData: this.toggleProperty(todoData, id, 'done')
		}
	});
}

onToggleImportant = (id) => {
	this.setState(({ todoData }) => {
		return {
			todoData: this.toggleProperty(todoData, id, 'important')
		}
	});
}
render (){
	const { todoData } = this.state;

	const doneCount = todoData
	.filter((el) => el.done).length;
	const todoCount = todoData.length - doneCount;

	return (
		<div className = 'todo-app'>
			<AppHeader toDo={ todoCount } done={ doneCount }/>
			<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter/>
			</div>
			<TodoList todos={ todoData }
			onDeleted={ this.deleteItem }
			onToggleImportant = { this.onToggleImportant }
			onToggleDone = { this.onToggleDone } />
			<ItemAddForm 
			onItemAdded = { this.addItem } />
		</div>
		);
}
} 

