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
			dispatch={props.dispatch}	/>
		<Footer />
	</div>
  );
}

export default App;
