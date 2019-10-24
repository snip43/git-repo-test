import React from 'react';

import Header from '../Header/header';
import Main from '../Main/';
import Footer from '../Footer/footer';


import './app.css';

const  App = (props) => {
return (
  <div className="App"> 
		<Header />
		<Main 
			state={props.state}
			addPost={props.addPost}	
			updatePostText={props.updatePostText}
			addMessage={props.addMessage}
			updateMessageText= {props.updateMessageText}/>
		<Footer />
	</div>
  );
}

export default App;
