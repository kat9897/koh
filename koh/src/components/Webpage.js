import React from 'react'

import { Header } from './Header'
import HabitDisplayShell  from './HabitDisplayShell'
import DateDisplayShell  from './DateDisplayShell'

const Webpage = () => {
    const currDate = new Date().getDate();
    return (
        <div className='appContainer'>
            <HabitDisplayShell/>
            <DateDisplayShell/>
            {/*<Header></Header>*/}
        </div>
    );
}

export default Webpage;