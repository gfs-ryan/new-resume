import React, { Component } from 'react'
import SocialMedia from './social_media'
import PropTypes from 'prop-types'

class Banner extends Component {

    render() {
        return(
            <div className='row banner'>
                <div className='banner-text'>
                    <h1 className='responsive-headline'>
                        {this.props.name}
                    </h1>
                    {/* <h3>{this.props.basics.summary}</h3> */}
                    <br/>
                    <hr/>
                    <SocialMedia ulClass='social' profiles={this.props.basics.profiles}/>
                </div>
            </div>
        )
    }
}

Banner.propTypes = {
    basics: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profiles: PropTypes.arrayOf(
            PropTypes.shape({
                network: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired
            })
        )
    })
}

export default Banner
