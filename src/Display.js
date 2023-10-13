import React from 'react'

const Display = ({input,output}) => {
  return (
    <div className="display">
        <div>
            <h2>{input}</h2>
        </div>
        <div>
            <h1>{output}</h1>
        </div>
    </div>
  )
}

export default Display