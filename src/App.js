import React, { useState } from 'react';

import './App.css'

import Navbar from './Navbar';
import Input from './Input'
import Game from './Game'

let v;

function App(){
    const [val, setVal] = useState(0);

    function getVal(value) {
        setVal(value);
        v = value;
    }

    
    if(v>3){
        return <div>
            <Navbar />
            <Input getVal={getVal} />
            <Game Val={v} />
        </div>
    } else {
        return <div>
            <Navbar />
            <Input getVal={getVal} />
        </div>
    }
}




export default App;