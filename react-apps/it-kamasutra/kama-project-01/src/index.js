import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let dialogData = [
	{name:'Яна', id:'yana'},
	{name:'Мама', id:'mom'},
	{name:'Папа', id:'dady'},
	{name:'Мелочь', id:'sister'},
	{name:'Димон', id:'dimon'}
];


let messageData = [
	{id:1, message: 'Жду! Борщ готов!'},
	{id:2, message: 'Привет,сынуля! Работаешь?'},
	{id:3, message: 'У меня отпуск в октябре,хочу приехать!'},
];

let postsData = [
	{id:1, value:'Первое',likeCount:20},
	{id:2, value:'Двадцать пятое', likeCount:1}
];

ReactDOM.render(
		<App 
			 dataDialog = {dialogData} 
			 dataMessage ={messageData} 
			 dataPosts = {postsData}
		/>, document.getElementById('root'));

