import { React, memo } from "react";

const Buttons = ({ onPlus, onMinus }) => {
    console.log("Button render");

    return (
        <div>
            <button onClick={onPlus}> + </button>
            <button onClick={onMinus}> - </button>
        </div>
    );
};

export default memo(Buttons);
