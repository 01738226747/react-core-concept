import { useState } from "react"

export default function Counter () {
    const sty ={
        border: '2px solid blue',
        borderRadius: '10px',
        padding: '10px',
    }

    const [count, SetCount] = useState(0)
    const hndleAdd = () => {
        const newCount = count + 1;
        SetCount( newCount);
    }
    return(
        <div style={sty}>
            <p>Counter: {count}</p>
            <button onClick={hndleAdd}>add</button>
        </div>
        
    )
}