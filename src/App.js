import React from 'react'
import './App.css';
import ClassErrorBoundary from './ClassErrorBoundary';
import ErrorRecovery from './ErrorRecovery';
import FunctionalErrorBoundary from './FunctionalErrorBoundary';

function App() {
  return (
    <div className="App">
        {/* <ClassErrorBoundary /> */}
        <FunctionalErrorBoundary />
        <ErrorRecovery/>
    </div>
  );
}

export default App;
