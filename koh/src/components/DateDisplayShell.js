import React, {Text} from 'react'
import DateRow from './DateRow'

export const DateDisplayShell = ({ date }) => {
    return (
        <>
            {/* TODO call backend api */}
            <DateRow date="1" checks={[true, true, false, true, false]} highlight="Highlight" dailyLog="Description of my day"/>
        </>
    )
}