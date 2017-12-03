import React, { Component } from 'react'
import PropTypes from 'prop-types'
import About from './about'
import Work from './work'
import Education from './education'
import Skills from './skills'
import Portfolio from './portfolio'
import References from './references'
import Footer from './footer'

class Section extends Component {

    render() {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        }

        return (
            <div>
                <About content={this.props.basics}/>
                <Work content={this.props.work}/>
                <Education content={this.props.education}/>
                <Skills content={skillsContent}/>
                <Portfolio content={this.props.portfolio}/>
                <References content={this.props.references}/>
                <Footer content={this.props.basics}/>
            </div>
        )
    }
}

Section.propTypes = {
    basics: PropTypes.shape({
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
    }),
    work: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            website: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            highlights: PropTypes.arrayOf(
                PropTypes.string
            )
        })
    ),
    education: PropTypes.arrayOf(
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
    ),
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(
                PropTypes.string
            ),
            skillDetails: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    level: PropTypes.string.isRequired,
                    keywords: PropTypes.arrayOf(
                        PropTypes.string
                    )
                })
            )
        })
    ),
    languages: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            level: PropTypes.string.isRequired
        })
    ),
    portfolio: PropTypes.arrayOf(
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
    ),
    references: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            reference: PropTypes.string.isRequired
        })
    )
}

export default Section
