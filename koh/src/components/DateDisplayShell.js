import React, {Text} from 'react'
import DateRow from './DateRow'

export const DateDisplayShell = ({ date }) => {
    {/* TODO call backend api */}
    return (
        <>
            <DateRow date="1" checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date="1" checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date="1" checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date="1" checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date="1" checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date="1" checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date="1" checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
        </>
    )
}