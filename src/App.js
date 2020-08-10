import React from 'react';
import {Route} from 'react-router-dom';

import './scss/app.scss';
import {Header} from './components/';
import {Home, Cart} from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
      setPizzas(json.pizzas);
    })
  }, [])
  
  return (
    <div className="App">
      <div class="wrapper">
      <Header />
      <div class="content">
        <Route exact path="/" render={()=><Home items={pizzas}/>}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    </div>
    </div>
  );
}

export default App;
