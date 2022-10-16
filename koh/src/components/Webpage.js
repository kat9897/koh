import React from 'react'

import { Header } from './Header'
import HabitDisplayShell  from './HabitDisplayShell'
import DateDisplayShell  from './DateDisplayShell'

export const Webpage = () => {
    const currDate = new Date().getDate();
    return (
        <div>
            <HabitDisplayShell/>
            <DateDisplayShell/>
            <Header></Header>
        </div>
    );
}