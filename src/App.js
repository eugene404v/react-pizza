import React from 'react';
import {Route} from 'react-router-dom';



import './scss/app.scss';
import {Header} from './components/';
import {Home, Cart} from './pages';

import store from './redux/store'


function App() {

  return (
    <div className="App">
      <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    </div>
    </div>
  );}

export default App;
