import React, { Component } from 'react'

class Header extends Component {
    getInitialState() {
        return {
            window: {
                height: 0,
                width: 0
            }
        }
    }

    updateDimensions() {
        return this.setState({
            window: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        })
    }

    componentWillMount() {
        this.updateDimensions()
    }

    componentDidMount() {
        return window.addEventListener('resize', this.updateDimensions);
    }

    render() {
        const style = {
            height: this.state.window.height
        }

        return (
            <header id='home' style={style}>
                {this.props.children}
            </header>
        )
    }
}

export default Header
