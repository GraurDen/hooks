import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import Buttons from "./components/Buttons";

// https://youtu.be/8Yy6MDsF-Tg?t=502 - useRef
// https://youtu.be/F8EvdTsl6hU - useCallback
// https://youtu.be/F8EvdTsl6hU?t=928 useCallback2

function App() {
    const [count, setCount] = useState(0);

    const onPlus = useCallback(() => setCount((count) => count + 1), []);
    const onMinus = useCallback(() => setCount((count) => count - 1), []);

    return (
        <div className="App">
            <div className="block">{count}</div>
            <Buttons onMinus={onMinus} onPlus={onPlus} />
        </div>
    );
}

export default App;
