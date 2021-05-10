import logo from './logo.svg';
import './App.css';
import { useState } from 'react';  


const URL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.878113&lon=-87.629799&appid=a889ab39f32412f8e65caec1d77a1baa'


function App() {
  
  const [ data, setData ] = useState({});
  
  fetch(URL).then((response) => {
    response.text().then((resData) => {
      setData(resData)
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <code>{ JSON.stringify(data, null, 2)}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
