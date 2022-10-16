import React, {useState} from 'react'
import PropTypes from 'prop-types'

const DateRow = ({ date, checks, highlight, dailyLog }) => {

    const clicked = () => {
        alert("Today's checkbox is clicked!");
    }

    const [isOpen, toggleOpen] = useState(false);
    let todayDate = (new Date()).getDate();
    const checkmarks = checks.map(check => ( check ? '✓' : ' ' ));

    return (
        <div className='day'>
            <div className='dayStrip'>
                <button className='date' onClick={() => toggleOpen(!isOpen)}>{date}</button>
                { checkmarks.map(checkmark => ( 
                    ((todayDate === date) 
                      && <button className='todayCheckmark' onClick={clicked}>{checkmark}</button>
                    ) || <div className='checkmark'>{checkmark}</div>
                ) ) }
                <div className='highlight'>
                    <span> {highlight} </span>
                </div>
            </div>
            {isOpen && <div className='dailyLog'>{dailyLog}</div>}
        </div>
    )
}

DateRow.defaultProps = {
    highlight: 'Highlight of the day.',
    dailyLog: 'Description of my day.',
}

DateRow.propTypes = {
    date: PropTypes.number.isRequired,
    checks: PropTypes.array.isRequired,
    highlight: PropTypes.string,
    dailyLog: PropTypes.string,
}

export default DateRow;