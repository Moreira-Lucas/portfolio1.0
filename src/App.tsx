import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/Header';
import Routes from './routes'
import { BrowserRouter as Router, Switch }  from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';



function App() {
  return (
    <>
     
    <Router>
      <Header children  />

      <Routes />
     
    </Router>
    


<GlobalStyles />

    </>
    
  );
}

export default App;
