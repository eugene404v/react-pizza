import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';


import './scss/app.scss';
import {Header} from './components/';
import {Home, Cart} from './pages';

import {setPizzas} from './redux/actions/pizzas'
import store from './redux/store'


/*function App() {
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas);
    })
  }, [])
  
  return (
    <div className="App">
      <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={()=><Home items={pizzas}/>}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    </div>
    </div>
  );*/

  class App extends React.Component {
    componentDidMount() {
      axios.get('http://localhost:3000/db.json').then(({data}) => {
      store.dispatch(setPizzas(data.pizzas))
    })
    }
    
    render() {
      return (
        <div className="App">
          <div className="wrapper">
          <Header />
          <div className="content">
            <Route exact path="/" render={()=><Home items={this.props.items}/>}/>
            <Route exact path="/cart" component={Cart}/>
          </div>
        </div>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      items: state.pizzas.items
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      setPizzas: (items) => dispatch(setPizzas(items))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
