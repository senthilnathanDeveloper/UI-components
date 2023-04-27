import React, { KeyboardEvent, useEffect } from 'react';
import './App.css';
import { Button } from './Components/Button/Button';
import RadioButton from './Components/RadioButton/RadioButton';
import Checkbox from './Components/Checkbox/Checkbox';


function App() {
  const handleClick = (e: any) => {
    console.log("event", e)
    alert("function working")
  }

  const handleChange = (e: any) => {
    console.log("e", e.target.checked)
  }

 

  const handleEnter = () => {
    console.log("clcik")
  }

  return (
    <div className="App">
      <div className='parent'>

        <Checkbox label='Active' variant='primary'size='lg' icon   />

        <div className='child'>
          <RadioButton aria_Label='Active' value="Active" size='sm'   />
        </div>


      </div>
    </div>
  );
}

export default App;
