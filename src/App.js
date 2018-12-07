import React, { Component } from 'react';
import { Home } from "./components/Home";
import { MovieDetail } from "./components/MovieDetail"
import { ShowDetail } from "./components/ShowDetail"


import { Route } from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <div >
        <Route exact path='/' component={Home} />
        <Route exact path='/movie/:id' component={MovieDetail} />
        <Route exact path='/show/:id' component={ShowDetail} />
      </div>
    );
  }
}

export default App;
