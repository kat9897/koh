import React, {Text} from 'react'
import DateRow from './DateRow'

const DateDisplayShell = ({ date }) => {
    {/* TODO call backend api */}
    return (
        <>
            <DateRow date={16} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date={15} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date={14} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date={13} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date={12} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date={11} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date={10} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
        </>
    )
}

export default DateDisplayShell;