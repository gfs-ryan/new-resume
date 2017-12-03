import React, { Component } from 'react'
import SocialMedia from '../social_media'
import PropTypes from 'prop-types'

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className='row'>
                    <div className='twelve columns'>
                        <SocialMedia ulClass='social-links' profiles={this.props.content.profiles}/>
                        <ul className='copyright'>
                            <li>
                                This site is developed in React.js by&nbsp;
                                <a
                                    href='https://github.com/gfs-ryan'
                                    title='Ryan Wilson'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Ryan Wilson
                                </a> from the original CV design from&nbsp;
                                <a
                                    href='http://www.styleshout.com/'
                                    title='Styleshout'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Styleshout
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id='go-top'>
                        <a className='smoothscroll' title='Back to Top' href='/'>
                            <i className='icon-up-open'/>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

Footer.propTypes = {
    content: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        summary: PropTypes.arrayOf(
            PropTypes.string
        ),
        location: PropTypes.shape({
            address: PropTypes.string.isRequired,
            postalCode: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
            region: PropTypes.string.isRequired
        }),
        profiles: PropTypes.arrayOf(
            PropTypes.shape({
                network: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired
            })
        )
    })
}

export default Footer
