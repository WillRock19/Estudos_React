import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Simple test to verify setup', () => {
  it('Should pass if 1 + 1 is 2', () => {
    expect(1 + 1).toBe(2);
  });
})

describe('For App component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
})

