// Code EyesOnMe Component Here
import React from 'react'
 
function EyesOnMe(){
    
    const handleFocus = (e) => {
        console.log('Good!');
    }

    const handleBlur = (e) => {
        console.log('Hey! Eyes on me!');
    }

    return(
        <button onFocus={handleFocus} onBlur={handleBlur} ></button>
    )
}
export default EyesOnMe