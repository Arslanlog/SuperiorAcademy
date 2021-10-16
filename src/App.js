import { Switch } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import Body from './Body';
import Team from './Team';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar />
     <Switch>
       <Route exact path="/" component={Body} />
       <Route  path="/Team" component={Team} />
     </Switch>
    </>
  );
}

export default App;
