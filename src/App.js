import React from 'react'
import './App.css';
import ClassErrorBoundary from './ClassErrorBoundary';
import FunctionalErrorBoundary from './FunctionalErrorBoundary';

function App() {
  return (
    <div className="App">
        {/* <ClassErrorBoundary /> */}
        <FunctionalErrorBoundary />
    </div>
  );
}

export default App;
