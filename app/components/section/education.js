import React, { Component } from 'react'
import Datetime from '../../utils/datetime'
import PropTypes from 'prop-types'

class Entry extends Component {

    render() {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate)
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate)
        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>{this.props.entry.institution}</h3>
                    <p className='info'>
                        {this.props.entry.area}
                        <span> &bull; </span>
                        <span className='info-summary'>{this.props.entry.summary}</span>
                        <span> &bull; </span>
                        <em className='date'>{startDate} - {endDate}</em>
                    </p>
                </div>
            </div>
        )
    }
}

Entry.propTypes = {
    entry: PropTypes.shape({
        institution: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        studyType: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        gpa: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        courses: PropTypes.arrayOf(
            PropTypes.string
        )
    })
}

class Education extends Component {

    render() {
        return (
            <section id='education'>
                <div className='row education'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} entry={entry}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

Education.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            institution: PropTypes.string.isRequired,
            area: PropTypes.string.isRequired,
            studyType: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            gpa: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            courses: PropTypes.arrayOf(
                PropTypes.string
            )
        })
    )
}
export default Education
