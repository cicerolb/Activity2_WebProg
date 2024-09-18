import React, {useState, useEffect} from 'react'
import './css/Counter.css'

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>You clicked {count} times</p>
            
            <div className='button-container'>
            <button onClick={() => setCount(prev => prev + 1)}> Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}> Decrement</button>
            <button onClick={() => setCount(0)}> Reset</button>
            </div>
        </div>
    )
}

export default Counter;