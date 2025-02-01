import { useState } from 'react'
const Rerendering = () => {
    const [count, setCount] = useState(0)
    return(
    <>
        <h2> {count} </h2>
        <button
            onClick={() => setCount(count + 1)}
        >+</button>
        <button
            onClick={() => setCount(count - 1)}
        >-</button>
    </>
    )
}
export default Rerendering