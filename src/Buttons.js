import React from 'react'

const Buttons = ({onButtonClick}) => {
  
    const buttons = [
        '7', '8', '9', 'Del',
        '4', '5', '6', '/',
        '1', '2', '3', '*',
        '0', '.', '+', '-',
        '(', ')', 'AC', '='
    ];    

    return (
    <div className="keypad">
        {buttons.map((button,index)=>(
            <button key={index} onClick={() => onButtonClick(button)} >
                {button}
            </button>
        ))}

    </div>
  )
}

export default Buttons
  