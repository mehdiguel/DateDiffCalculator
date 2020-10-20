import React, { useState } from 'react';
import logo from './Logo.jpg';
import Dates from './dates/dates';
import './App.css';

function App() {

 const [firstDate, setfirstDate] = useState(new Date());
 const [secondDate, setSecondDate] = useState(new Date());
 const [diff, setDiff] = useState(0);

  const onChangeFirstDate = event => {
      setfirstDate(event.target.value);
  }

  const onChangeSecondtDate = event => {
    setSecondDate(event.target.value);
  }

  const calculateDiffDate = () => {
    const first = new Date(firstDate)
    const second = new Date(secondDate)
    
    const diff = Math.abs((second - first)/1000/60/60/24);
    setDiff(diff);
    console.log(diff + "jours");    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="Text">This simple app calculates the difference between two dates</p>
        <Dates onChangeDate={onChangeFirstDate} />
        <Dates onChangeDate={onChangeSecondtDate} />
        <input type="submit" className="Button" value="Submit" onClick={calculateDiffDate} />
        <p className="Text">The difference is {diff} days</p>          
      </header>
    </div>
  );
}

export default App;
