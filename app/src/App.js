import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

//https://youtu.be/8Yy6MDsF-Tg?t=502

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    let ulElem;

    function addNumber() {
        const lastNumber = numbers[numbers.length - 1];
        setNumbers([...numbers, lastNumber + 1]);
    }

    console.log(numbers);

    const handleScroll = () => {
        console.log("that was scrolling");
    };

    useEffect(() => {
        ulElem = document.getElementsByClassName("block")[0];
        ulElem.addEventListener("scroll", handleScroll);
    }, []);

    const removescroll = () => {
        ulElem.removeEventListener("scroll", handleScroll);
    };

    return (
        <div className="App">
            <div className="block">
                <ul>
                    {numbers.map((num) => {
                        return <li key={num}>{num}</li>;
                    })}
                </ul>
            </div>

            <button onClick={addNumber}>add number</button>
            <button onClick={removescroll}>remove scroll</button>
        </div>
    );
}

export default App;
