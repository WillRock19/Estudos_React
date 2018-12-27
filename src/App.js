import React, { Component } from 'react';
import './App.css';

import Logo from './componentes/Logo';
import './componentes/Logo/index.css';

function Turn(){
    return <div></div>;
}

function Continue(){
    return <div></div>;
}

function Footer(){
  return <div></div>;
}

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state = { clicks: 0  };
  }

  render(){
    return <section className="game-container">
              <Logo />
              <Turn />
              <Continue />
              <Footer />
           </section>;
  }
}

export default App;
