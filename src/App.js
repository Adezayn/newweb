import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
//import MySection from './components/mySection';
import Navbar from './components/navbar';
import initFontAwesome from './components/initFontAwesome';
initFontAwesome();



//import CustomCard from './components/card';


function App () {
  return ( <div classname="App">
  
    <BrowserRouter><Navbar />
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
      </Switch>
      </BrowserRouter>
      <div>

      </div>
     
      
    
  </div>
  );

};

export default App;
