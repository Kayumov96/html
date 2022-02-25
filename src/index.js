import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar/Index.jsx';
import Header from './Components/Header/index.jsx';
import Infobody from './Components/Infobody/index.jsx';
import Page2 from './Components/Page2/index.jsx'

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar />
    <Header/>
    <Infobody/> */}
    <Page2/>
  </React.StrictMode>,
  document.getElementById('root')
);

