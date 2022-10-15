import React from 'react'

import { Header } from './Header'
import { HabitDisplayShell } from './HabitDisplayShell'
import { DateDisplayShell } from './DateDisplayShell'

export const Webpage = () => {
    const currDate = new Date().getDate();
    return (
        <div>
            <HabitDisplayShell/>
            {/* 7 days */}
            <DateDisplayShell
                date={currDate}
            />
            <DateDisplayShell
                date={currDate+1}
            />
            <DateDisplayShell
                date={currDate+2}
            />
            <DateDisplayShell
                date={currDate+3}
            />
            <DateDisplayShell
                date={currDate+4}
            />
            <DateDisplayShell
                date={currDate+5}
            />
            <DateDisplayShell
                date={currDate+6}
            />
            <Header></Header>
        </div>
    );
}