import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <h2>Error Boundary at High Level</h2>      
      <ErrorBoundary>
        <BuggyCounter/>
        <BuggyCounter/>
      </ErrorBoundary>
      <br/>
      <h2>Error Boundary at Component level</h2>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
