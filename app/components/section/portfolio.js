import React, { Component } from 'react'
import Random from '../../utils/random'
import Modal from './modal'
import PropTypes from 'prop-types'

class Entry extends Component {

    getInitialState() {
        return {
            modalOpen: false
        }
    }

    handleOpenModal() {
        return this.setState({
            modalOpen: true
        })
    }

    handleCloseModal() {
        return this.setState({
            modalOpen: false
        })
    }

    render() {
        return (
            <div className='columns portfolio-item'>
                <div className='item-wrap' onClick={this.handleOpenModal}>
                    <img
                        src={this.props.entry.image.thumb}
                        alt={this.props.entry.name}/>
                    <div className='overlay'>
                        <div className='portfolio-item-meta'>
                            <h5>{this.props.entry.name}</h5>
                            <p>{this.props.entry.category}</p>
                        </div>
                    </div>
                    <div className='link-icon'>
                        <i className='icon-down-open'/>
                    </div>
                </div>
                <Modal entry={this.props.entry} isOpen={this.state.modalOpen} onRequestClose={this.handleCloseModal}/>
            </div>
        )
    }
}

Entry.propTypes = {
    entry: PropTypes.shape({
        name: PropTypes.string.isRequired,
        publisher: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        releaseDate: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        image: PropTypes.shape({
            modal: PropTypes.string.isRequired,
            thumb: PropTypes.string.isRequired
        }),
        keywords: PropTypes.arrayOf(
            PropTypes.string
        )
    })
}

class Portfolio extends Component {

    render() {
        const portfolio = Random.shuffleArray(this.props.content).slice(0, 8)
        return (
            <section id='portfolio'>
                <div className='row'>
                    <div className='twelve columns collapsed'>
                        <h1>Portfolio</h1>
                        <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
                            {portfolio.map(function (entry, index) {
                                return (
                                    <Entry key={index} index={index} entry={entry}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

Portfolio.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            publisher: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            releaseDate: PropTypes.string.isRequired,
            website: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            image: PropTypes.shape({
                modal: PropTypes.string.isRequired,
                thumb: PropTypes.string.isRequired
            }),
            keywords: PropTypes.arrayOf(
                PropTypes.string
            )
        })
    )
}

export default Portfolio
