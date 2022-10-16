import React from 'react'
import PropTypes from 'prop-types'

const DateRow = ({ date, checks, highlight, dailyLog }) => {
    
    // let check = ' ';
    // if(checks[0] === true) check = '✓';

    const checkmarks = checks.map(check => ( check ? '✓' : ' ' ));

    return (
        <div className='day'>
            <div className='dayStrip'>
                <div className='date'>{date}</div>
                { checkmarks.map((checkmark) => ( <div className='checkmark' style={{width: '50px'}}>{checkmark}</div> )) }
                <div className='highlight'>{highlight}</div>
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