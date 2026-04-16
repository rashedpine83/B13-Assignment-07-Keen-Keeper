import React, { createContext, useState } from 'react';

export const addTimelineContext = createContext();

const FriendContext = ({children}) => {

    const [addTimeline, setAddTimeline] = useState([]);

    const data = {
        addTimeline, 
        setAddTimeline
    };

    return (
        <addTimelineContext.Provider value={data}>
            {children}
        </addTimelineContext.Provider>
    )    
}
export default FriendContext;