import React from 'react'
import { HabitUnit } from './HabitUnit'

export const HabitDisplay = (habitArray) => {

    var parent = <div id="habitDisplay"></div>

    for (var i = 0; i < habitArray.length(); i++){
        parent.append(<HabitUnit></HabitUnit>);
    }

    return parent;
}