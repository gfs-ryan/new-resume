import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
import PropTypes from 'prop-types'

class Entry extends Component {

    render() {
        return (
            <div>
                <blockquote>
                    <p>{this.props.entry.reference}</p>
                    <cite>
                        {this.props.entry.name}
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {`${this.props.entry.position}, ${this.props.entry.company}`}
                    </cite>
                </blockquote>
            </div>
        )
    }
}

Entry.propTypes = {
    entry: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        reference: PropTypes.string.isRequired
    })
}

class References extends Component {

    render() {
        const carouselConfig = {
            autoplay: true,
            decorators: [],
            framePadding: '10px',
            cellSpacing: 30,
            wrapAround: true
        }

        return (
            <section id='testimonials'>
                <div className='text-container'>
                    <div className='row'>
                        <div className='two columns header-col'>
                            <h1>
                                <span>References</span>
                            </h1>
                        </div>
                        <div className='columns flex-container'>
                            <div className='flexslider'>
                                <Carousel
                                    autoplay={carouselConfig.autoplay}
                                    decorators={carouselConfig.decorators}
                                    wrapAround={carouselConfig.wrapAround}>
                                    {this.props.content.map(function (entry, index) {
                                        return (
                                            <Entry key={index} entry={entry}/>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

References.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            reference: PropTypes.string.isRequired
        })
    )
}

export default References
