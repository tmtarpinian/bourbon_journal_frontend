import React from 'react';
import BourbonsContainer from './containers/BourbonsContainer'
import NewBourbon from './containers/NewBourbon'
import './App.css';

function App() {
  return (
    <div className="App">
     <BourbonsContainer />
     <NewBourbon />
    </div>
  );
}

export default App;
