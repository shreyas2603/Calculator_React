import './App.css';
import Display from './Display';
import Buttons from './Buttons';

import { useState } from 'react';

function App() {

  const [input,setInput]=useState('');
  const [output,setOutput]=useState('');

  const onButtonClick = (button) => {

    if(button=== '='){
      try{
        setOutput(eval(input));
      }catch(err){
        setOutput('ERROR');
      }
    }

    else if(button==='AC'){
      setInput('');
      setOutput('');
    }

    else if(button==='Del'){
      setInput(input.slice(0,-1))
    }
    else
      setInput(input+button)
  }


  return (
    <div className="App">
      <Display 
        input={input}  
        output={output}
      />
      <Buttons
        onButtonClick={onButtonClick}
      />      
    </div>
  );
}

export default App;
