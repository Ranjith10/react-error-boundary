import React, { useState } from 'react'

const BuggyCounter = () => {
    const [counter, setCounter] = useState(1)

    if(counter > 5) {
        throw new Error('React buggy counter crashed !')
    }

    return (
        <div className='counter'>
            <button onClick={() => setCounter(counter => counter+1)}>{counter}</button>
        </div>
    )
}

export default BuggyCounter
