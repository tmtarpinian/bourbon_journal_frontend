import React from 'react';
import BourbonsContainer from './containers/BourbonsContainer'
import AddBourbon from './containers/AddBourbon'
import './App.css';

function App() {
  return (
    <div className="App">
     <BourbonsContainer />
     <AddBourbon />
    </div>
  );
}

export default App;
