import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import Count from "./components/Count";
import IsFive from "./components/IsFive";

// https://youtu.be/8Yy6MDsF-Tg?t=502 - useRef
// https://youtu.be/F8EvdTsl6hU - useCallback
// https://youtu.be/F8EvdTsl6hU?t=928 useCallback2
// https://youtu.be/bm7wyCDJ7H8 - useMemo

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);


    return (
        <div className="App">

            <h3>Cчетчик 1:</h3>
            <div className="counter">
                <Count id={1} value={count1} />
                <button onClick={() => setCount1(count1 + 1)}>+</button>
            </div>

            <h3>Cчетчик 2:</h3>
            <div className="counter">
                <Count id={2} value={count2} />
                <button onClick={() => setCount2(count2 + 1)}>+</button>
                <IsFive value={count2} />
            </div>
        </div>
    );
}

export default App;
