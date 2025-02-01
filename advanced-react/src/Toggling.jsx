import './App.css'
import { useState } from 'react'
const Toggling = () => {
    const [isPinned, setPinned] = useState(false)
    const togglePinned = () => {
        setPinned(!isPinned)
    }
    return(
        <>
            <button onClick={togglePinned}>
                {isPinned && '📌'} Pinned This!
            </button>
        </>
    )
}
export default Toggling