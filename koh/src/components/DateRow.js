import React from 'react'
import PropTypes from 'prop-types'

const DateRow = ({ date, checks, highlight, dailyLog }) => {
    
    const collapse = () => {
        alert("I was clicked!");
    }

    const checkmarks = checks.map(check => ( check ? '✓' : ' ' ));

    return (
        <div className='day'>
            <div className='dayStrip'>
                <button className='date' onClick={collapse}>{date}</button>
                { checkmarks.map((checkmark) => ( 
                    <div className='checkmark'>
                        <span> {checkmark} </span>
                    </div> )) 
                }
                <div className='highlight'>
                    <span> {highlight} </span>
                </div>
            </div>
            <div className='dailyLog'>
                {dailyLog}
            </div>
        </div>
    )
}

DateRow.defaultProps = {
    highlight: 'Highlight of the day.',
    dailyLog: 'Description of my day.',
}

DateRow.propTypes = {
    date: PropTypes.string.isRequired,
    checks: PropTypes.array.isRequired,
    highlight: PropTypes.string,
    dailyLog: PropTypes.string,
}

export default DateRow;