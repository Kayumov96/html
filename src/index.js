import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar/Index.jsx';
import Header from './Components/Header/index.jsx';
import Infobody from './Components/Infobody/index.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header/>
    <Infobody/>
  </React.StrictMode>,
  document.getElementById('root')
);

