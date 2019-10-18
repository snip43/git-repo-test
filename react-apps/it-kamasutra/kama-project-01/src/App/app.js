import React from 'react';

import Header from '../Header/header';
import Main from '../Main';
import Footer from '../Footer/footer';

import './app.css';


const  App = ({dataDialog,dataMessage,dataPosts}) => {
return (
  <div className="App"> 
		<Header />
		<Main 
		dataDia = {dataDialog}
		dataMes={dataMessage}
		dataPos={dataPosts}
		/>
		<Footer />
	</div>
  );
}

export default App;
