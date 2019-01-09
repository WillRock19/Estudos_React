import React, { Component } from 'react';
import './App.css';

import PropTypes from 'prop-types';

import Logo from './componentes/Logo';
import './componentes/Logo/index.css';

import TurnQuestion from './componentes/TurnQuestions';
import './componentes/TurnQuestions/index.css';

import Footer from './componentes/Footer';
import './componentes/Footer/index.css';

import Continue from './componentes/Continue';
import './componentes/Continue/index.css';

class App extends React.Component
{
    constructor(props) {
      super(props);
      this.imprimirProps();
    }

    imprimirProps(){
      console.log("A props recebida pelo App vale: ");
      console.log(this.props);
    }

    render(){
      return <section className="game-container">
                <Logo />
                <TurnQuestion {...this.props}/>
                <Continue />
                <Footer />
            </section>;
    }
}

export default App;

App.propTypes = {
    onAnswerSelected: PropTypes.func.isRequired,
    turnData: PropTypes.shape({
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      crossoverInfo: PropTypes.objectOf(PropTypes.string).isRequired
    })
    .isRequired,
    turnResult: PropTypes.string
}
