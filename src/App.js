import React, { Component } from 'react';
import './App.css';

import Logo from './componentes/Logo';
import './componentes/Logo/index.css';

import TurnQuestion from './componentes/TurnQuestions';
import './componentes/TurnQuestions/index.css';

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
      console.log(props);
    }

    render(){
      return <section className="game-container">
                <Logo />
                <TurnQuestion data={this.props.data} />
                <Continue />
                <Footer />
            </section>;
    }
}

export default App;
