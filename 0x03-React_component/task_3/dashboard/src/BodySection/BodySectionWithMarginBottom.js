#!/usr/bin/node
import React from 'react'; 
import PropTypes from 'prop-types'
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css'



class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props}/>
            </div>
        )
    }
}

BodySectionWithMarginBottom.defaultProps = {
    title: ''
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string
}

export default BodySectionWithMarginBottom;
