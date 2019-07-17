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
		],
		term: '',
		filter: 'all'

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

onSearchChange = (term) => {
	this.setState({ term }) ;
};


search(items, term){
	if(term.length === 0){
		return items;
	}
	 return items.filter((item)=>{
		return item.label
		.toLowerCase()
		.indexOf(term.toLowerCase()) > -1;
	});
}

filter (items,filter) {
	switch(filter){
		case 'all':
			return items;
		case 'active':
			return items.filter((item) => !item.done);
		case 'done':
			return items.filter((item) => item.done);
		default:
			return items;
	}
}

onFilterChange = ((filter)=>{
	this.setState({ filter });
});

render (){
	const { todoData, term, filter } = this.state;
	const visibleItems = this.filter(
		this.search(todoData, term), filter);

	const doneCount = todoData
	.filter((el) => el.done).length;
	const todoCount = todoData.length - doneCount;

	return (
		<div className = 'todo-app'>
			<AppHeader toDo={ todoCount } done={ doneCount }/>
			<div className="top-panel d-flex">
					<SearchPanel 
					onSearchChange = { this.onSearchChange } />
					<ItemStatusFilter 
					filter = {filter} 
					onFilterChange = { this.onFilterChange } />
			</div>
			<TodoList 
			todos={ visibleItems }
			onDeleted={ this.deleteItem }
			onToggleImportant = { this.onToggleImportant }
			onToggleDone = { this.onToggleDone } />
			<ItemAddForm 
			onItemAdded = { this.addItem } />
		</div>
		);
}
} 

