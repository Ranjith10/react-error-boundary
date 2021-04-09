import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            errorInfo: null,
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        })
    }

    render() {
        if(this.state.error) {
            return (
                <div>
                    <h2>Something went wrong</h2>
                    <h3>Please refresh the page </h3>
                    <details>
                        {this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>   
                </div>
            )            
        }
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

export default ErrorBoundary
