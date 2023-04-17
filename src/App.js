import React from 'react';
import DadJokeContainer from './containers/DadJokeContainer';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1 className="intro">"Tell me a joke Dad..."</h1>
      <DadJokeContainer />
    </div>
  );
}

export default App