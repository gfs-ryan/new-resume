import React, { Component } from 'react'
import PropTypes from 'prop-types'
import request from 'superagent'
import Header from './header'
import Navigation from '../components/navigation'
import Banner from './banner'
import ScrollDown from './scrollDown'
import Loading from './loading'
import Section from './section'

class Home extends Component {

    getInitialState() {
        return {
            resume: false
        }
    }

    componentDidMount() {
        return request
            .get(this.props.route.config.resumePath)
            .end(function (error, response) {
                return error ? error : this.setState({
                    resume: response.body
                })
            }.bind(this))
    }

    onLoad() {
        return (
            <div>
                <Header>
                    <Navigation navigation={this.props.route.config.navigation}/>
                    <Banner basics={this.state.resume.basics}/>
                    <ScrollDown/>
                </Header>
                <Section
                    basics={this.state.resume.basics}
                    work={this.state.resume.work}
                    education={this.state.resume.education}
                    skills={this.state.resume.skills}
                    languages={this.state.resume.languages}
                    portfolio={this.state.resume.projects}
                    references={this.state.resume.references}/>
            </div>
        )
    }

    beforeLoad() {
        return (
            <Loading/>
        )
    }

    render() {
        return this.state.resume ? this.onLoad() : this.beforeLoad();
    }
}

Home.propTypes = {
    route: PropTypes.shape({
        config: PropTypes.shape({
            resumePath: PropTypes.string.isRequired,
            navigation: PropTypes.object.isRequired
        }).isRequired
    }).isRequired
}

export default Home
