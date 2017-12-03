import React, { Component } from 'react'
import PropTypes from 'prop-types'

class About extends Component {

    render() {
        return (
            <section id='about'>
                <div className='row'>
                    <div className='two columns'>
                        <img className='profile-pic' src={this.props.content.picture} alt={this.props.content.name}/>
                    </div>
                    <div className='ten columns main-col'>
                        <h2>About Me</h2>
                        {this.props.content.summary.map(function (content, index) {
                            return (
                                <p key={index}>
                                    {content}
                                </p>
                            );
                        })}
                        <div className='row'>
                            <div className='columns contact-details'>
                                <h2>Contact Details</h2>
                                <p className='address'>
                                    <span>{this.props.content.location.address}</span>
                                    <br/>
                                    <span>{this.props.content.location.city}</span>
                                    <br/>
                                    <span>{this.props.content.location.countryCode}</span>
                                    <br/>
                                    <a href={`skype:${this.props.content.phone}`}>
                                        <span>{this.props.content.phone}</span>
                                    </a>
                                    <br/>
                                    <a href={`mailto:${this.props.content.email}`}>
                                        <span>{this.props.content.email}</span>
                                    </a>
                                </p>
                            </div>
                            {/*              <div className='columns download'>
                <p>
                  <a href='#' className='button'>
                    <i className='fa fa-download' />
                    Download Resume
                  </a>
                </p>
              </div>*/}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

About.propTypes = {
    content: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        summary: PropTypes.arrayOf(
            PropTypes.string
        ),
        location: PropTypes.shape({
            address: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        }),
    })
}

export default About
