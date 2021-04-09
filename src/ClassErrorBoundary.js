import React, { Component } from 'react'

import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';

class ClassErrorBoundary extends Component {
    render() {
        return (
            <div>
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
        )
    }
}

export default ClassErrorBoundary
