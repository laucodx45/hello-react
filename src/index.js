import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
  <button onClick={props.reset}>
    Reset
  </button>
  )
};

const Application = () => {

  const [textInput, setTextInput] = useState('');

  const handleInput = (e) => {
    setTextInput(e.target.value);
  }


  const reset = () => {
    console.log('reset');
    setTextInput('');
    
  };

  return (
    <main>
      <input placeholder="Type Your Name" typeof='text' value={textInput} onChange={handleInput}></input>
      <Button reset={reset}/>
      <h1>{textInput !== '' ? `Hello ${textInput}`: null}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
