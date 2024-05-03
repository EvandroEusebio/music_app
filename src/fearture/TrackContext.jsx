import React, {createContext}  from "react"
import { useState } from "react"

const TrackContext = createContext()

export const TrackProvider = ({children}) =>{
    const [track, setTrack] = useState('/music02.mp3')

    return(
        <TrackContext.Provider value={{track, setTrack}}>
            {children}
        </TrackContext.Provider>
    )
}

export default TrackContext;