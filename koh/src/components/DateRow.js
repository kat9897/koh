import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import db from '../firebase';

const DateRow = ({ date, checks, highlight, dailyLog }) => {
    const [habitId, setHabitId] = useState([]);
    const [isOpen, toggleOpen] = useState(false);
    let todayDate = (new Date()).getDate();
    let checkmarks = checks.map(check => ( check ? '✓' : ' ' ));

    // Read habits
    const readHabits = async () => {
        try {
        const habitIds = [];
        var ss = await db.collection("habits").get();
        ss.forEach((habit) => {
            habitIds.push(habit.id);
        })
        setHabitId([...habitIds]);
        } catch (e) {
        alert("error");
        }
    }
    // Update Habit
    const updateHabit = (e, dataIdToBeUpdated, habitIndex) => {
        e.preventDefault();
        db.collection("habits").doc(dataIdToBeUpdated).update({
            completed: checkmarks[habitIndex]
        });
    };

    // Clickey boi
    const handleClick = (e) => {
        let habitIndex = Math.floor( (e.pageX - 75)/50 );
        console.log(habitId[habitIndex]);

        updateHabit(e, habitId[habitIndex], habitIndex);   
        checks[habitIndex] = true ? false : true;
        console.log(checkmarks[habitIndex]); 

        // checkmarks[habitIndex] = ' ' ? '✓' : ' ';
    }

    useEffect(() => {
        readHabits();     
      }, [])

    
    return (
        <div className='day'>
            <div className='dayStrip'>
                <button className='date' onClick={() => toggleOpen(!isOpen)}>{date}</button>
                { checkmarks.map(checkmark => ( 
                    ((todayDate === date) 
                      && <button className='todayCheckmark' onClick={(e) => handleClick(e)}> {checkmark} </button>
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