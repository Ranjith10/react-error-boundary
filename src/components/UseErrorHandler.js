/* Error boundaries do not catch errors for:

Event handlers (learn more)
Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
Server side rendering
Errors thrown in the error boundary itself (rather than its children)
This means you have to handle those errors yourself, but you probably would like to reuse 
the error boundaries you worked hard on creating for those kinds of errors as well.
 This is what useErrorHandler is for.
*/

//Wrap this component with a ErrorBoundary that is created already 
import React from 'react'

const UseErrorHandler = () => {
    const [greeting, setGreeting] = React.useState(null)
    const handleError = useErrorHandler()

    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        fetchGreeting(name).then(
        newGreeting => setGreeting(newGreeting),
        handleError,
        )
    }

    return greeting ? (
        <div>{greeting}</div>
    ) : (
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input id="name" />
        <button type="submit">get a greeting</button>
        </form>
    )
}

export default UseErrorHandler
