import React, { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const DisplayUserName = ({userName}) => {
    if(userName === 'break') {
        throw new Error('The component broke!')
    }
    return <div>{`Hi ${userName}!`}</div>
}

//Error component can recover in two ways
//1.Clicking on `Click to recover` - handled by resetErrorBoundary
//2.Changing the userName state - it is wired using "resetKeys" prop
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

const ErrorRecovery = () => {
    const [userName, setUserName] = useState('')
    return (
        <div>
            <input 
                type='text'
                value={userName}
                onChange={e => setUserName(e.target.value)}
                placeholder={'Dont type "break"'}
            />
            <ErrorBoundary
                FallbackComponent = {ErrorFallback}   
                onReset = {() => setUserName('')}
                resetKeys = {[userName]}         
            >
                <DisplayUserName 
                    userName={userName}                
                />
            </ErrorBoundary>
        </div>
    )
}

export default ErrorRecovery
