import React from "react";
import { useState } from "react";
import "./App.css";

//https://youtu.be/8Yy6MDsF-Tg

function App() {
    const [numbers, setNumbers] = useState([(1, 2, 3, 4, 5)]);

    function addNumber() {
        const lastNumber = numbers[numbers.length - 1];
        setNumbers([...numbers, lastNumber + 1]);
    }

    console.log(numbers);

    return (
        <div className="App">
            <button onClick={addNumber}>add number</button>
        </div>
    );
}

export default App;
