import { Switch } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import Body from './Body';
import Team from './Team';
import NavBar from './NavBar';
import Footer1 from './Footer1';
import FooterSection from './FooterSection';


function App() {
  return (
    <>
      <NavBar />
     <Switch>
       <Route exact path="/" component={Body} />
       <Route  path="/Team" component={Team} />
     </Switch>
      <Footer1 />
      <FooterSection />
    </>
  );
}

export default App;
