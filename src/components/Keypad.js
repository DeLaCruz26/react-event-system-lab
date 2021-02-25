// Code Keypad Component Here
import React from 'react'

function Keypad(){

    const handleKeyUp = (e) => {
        console.log('Entering password...');
    }

    return(
    <input onKeyUp={handleKeyUp} type="password"/>
    )
}
export default Keypad