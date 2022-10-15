import React from 'react'

import { Header } from './Header'
import HabitDisplayShell from './HabitDisplayShell'
import DateDisplayShell from './DateDisplayShell'

const Webpage = () => {
    return (
        <div>
            <Header></Header>
            <HabitDisplayShell/>
            <DateDisplayShell/>
        </div>
    );
}

export default Webpage;