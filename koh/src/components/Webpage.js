import React from 'react'

import { Header } from './Header'
import { HabitDisplayShell } from './HabitDisplayShell'
import { DateDisplayShell } from './DateDisplayShell'

export const Webpage = () => {
    return (
        <div>
            <Header></Header>
            <HabitDisplayShell></HabitDisplayShell>
            <DateDisplayShell></DateDisplayShell>
        </div>
    );
}