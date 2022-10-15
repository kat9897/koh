import React from 'react';
import DateRow from './DateRow';

const DateDisplayShell = () => {
    return( 
    <>
        {/* TODO call backend api */}
        <DateRow date="1" checks={[true, true, false, true, false]} highlight="Highlight" dailyLog="Description of my day"/>
    </>
    );
}

export default DateDisplayShell;