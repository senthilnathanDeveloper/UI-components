import React, { KeyboardEvent, useEffect } from 'react';
import './App.css';
import { Button } from './Components/Button/Button';
import RadioButton from './Components/RadioButton/RadioButton';
import Checkbox from './Components/Checkbox/Checkbox';
import CheckboxGroup from './Components/Checkbox/CheckboxGroup';



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

  const options = [
    { label: 'Option 1', checked: false },
    { label: 'Option 2', checked: true },
    { label: 'Option 3', checked: false },
  ];
  return (
    <div className="App">
      <div className='parent'>

        {/* <CheckboxGroup direction="vertical">
        {options?.map((option) => {
          return (
            <>
                <Checkbox
                  WithoutIcon
                  checked
                  label={option.label}
                  onChange={() => { }}
                  size="sm"
                />

            </>
          )
        })}
        </CheckboxGroup> */}



        <div className='child'>
          {/* <RadioButton aria_Label='Active' value="Active" size='sm'   /> */}
        </div>


      </div>
    </div>
  );
}

export default App;
