import React, { useState } from 'react';
import PorpTypes from 'prop-types';


function Input({getVal}) {
    const [input, setInput] = useState(null);
    
    function onChange(event){
        setInput(event.target.value);
    }

    function onKeyDown(event) {
        const value = event.target.value;

        if (event.key === 'Enter' && value) {
            getVal(value)
            setInput('')
        }
    }

    return (
        <div className="Input">
            <div className="Input__header">Input board size</div>
            <input 
                className="Input__field" 
                type="number" value={input} 
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

Input.propType = {
    getVal: PorpTypes.func.isRequired
}

export default Input;