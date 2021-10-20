import { Switch } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import Body from './Body';
import Team from './Team';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';

function App() {
  return (
    <>
      <Switch>
      <Route exact path="/" component={NavBar} />
      <Route exact path="/Team" component={NavBar2} />
      </Switch>
     <Switch>
       <Route exact path="/" component={Body} />
       <Route  path="/Team" component={Team} />
     </Switch>
    </>
  );
}

export default App;
