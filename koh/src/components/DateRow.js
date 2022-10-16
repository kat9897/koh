import React, {useState} from 'react'
import PropTypes from 'prop-types'

const DateRow = ({ date, checks, highlight, dailyLog }) => {
    
    const collapse = () => {
        alert("I was clicked!");
    }

    const [isOpen, toggleOpen] = useState(false);
    
    const checkmarks = checks.map(check => ( check ? '✓' : ' ' ));

    return (
        <div className='day'>
            <div className='dayStrip'>
                <button className='date' onClick={() => toggleOpen(!isOpen)}>{date}</button>
                { checkmarks.map((checkmark) => ( 
                    <div className='checkmark'>
                        <span> {checkmark} </span>
                    </div> )) 
                }
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
    date: PropTypes.string.isRequired,
    checks: PropTypes.array.isRequired,
    highlight: PropTypes.string,
    dailyLog: PropTypes.string,
}

export default DateRow;