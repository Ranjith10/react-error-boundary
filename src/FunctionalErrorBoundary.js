import React from 'react'

import {ErrorBoundary} from 'react-error-boundary'
import BuggyCounter from './components/BuggyCounter'

const ErrorFallback = ({error, resetErrorBoundary}) => {
    return (
        <div>
            <h2>Something went wrong</h2>
            <h3>Please refresh the page </h3>
            <div>
                {error && error.message}
                <br/>
                <button onClick={resetErrorBoundary}>Click to recover</button>
            </div>   
        </div>
    )
}

const FunctionalErrorBoundary = () => {
    return (
        <div>
            <h2>Error Boundary at High Level</h2>      
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset = {() => window.location.reload()}                
                >
                    <BuggyCounter/>
                    <BuggyCounter/>
                </ErrorBoundary>
                <br/>
                <h2>Error Boundary at Component level</h2>
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}         
                    onReset = {() => window.location.reload()}       
                >
                    <BuggyCounter/>
                </ErrorBoundary>
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}         
                    onReset = {() => window.location.reload()}       
                >
                    <BuggyCounter/>
                </ErrorBoundary>                
        </div>
    )
}

export default FunctionalErrorBoundary
