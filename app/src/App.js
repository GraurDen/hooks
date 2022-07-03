import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

// https://youtu.be/8Yy6MDsF-Tg?t=502 - useRef
// https://youtu.be/F8EvdTsl6hU - useCallback
// https://youtu.be/F8EvdTsl6hU?t=928 useCallback2

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const ulElem = useRef();
    const numRef = useRef();
    numRef.current = numbers;

    const start = () => {
        ulElem.current.addEventListener("scroll", handleScroll);
    };

    const stop = () => {
        ulElem.current.removeEventListener("scroll", handleScroll);
        console.log("remove scroll");
        console.log("ulElem", ulElem.current);
    };

    const addNumber = () => {
        const lastNumber = numbers[numbers.length - 1];
        setNumbers([...numbers, lastNumber + 1]);
    };

    const handleScroll = useCallback(() => {
        console.log("that was scrolling", numRef.current);
    }, []);

    return (
        <div className="App">
            <div className="block" ref={ulElem}>
                <ul>
                    {numbers.map((num) => {
                        return <li key={num}>{num}</li>;
                    })}
                </ul>
            </div>

            <button onClick={addNumber}>add number</button>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
        </div>
    );
}

export default App;
