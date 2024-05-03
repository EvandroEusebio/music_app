import React, {createContext}  from "react"
import { useState } from "react"

const TrackContext = createContext()
import { tracks } from "@/utils/track_json"

export const TrackProvider = ({children}) =>{
    const [track, setTrack] = useState([tracks[0]])

    return(
        <TrackContext.Provider value={{track, setTrack}}>
            {children}
        </TrackContext.Provider>
    )
}

export default TrackContext;