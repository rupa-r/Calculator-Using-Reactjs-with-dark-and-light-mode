import React, { useState } from 'react';
import logo from './sun.svg';
import img from './moon.svg';
import './styles/darkmode.css';
//import './styles/App.css';


const App = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult(" ");
    }
    const backspace = () => {
        setResult(result.slice(0, -1));
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch(err) {
            setResult("Error")
        }        
    }
    return(
        <div>
            <label>
            <input class='toggle-checkbox' type='checkbox'></input>
                    <div class='toggle-slot'>
                    <div class="container">
                    <div class='toggle-slot1'></div>
                    <input type="text" value={result} class="input-text" />
                    <div className="keypad">
                <button className="highlight" onClick={clear} id="clear">Clear</button>
                <button className="highlight" onClick={backspace} id="backspace">C</button>
                <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button className="highlight" name="*" onClick={handleClick}>&times;</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button className="highlight" name="+" onClick={handleClick}>+</button>
                <button name="0" onClick={handleClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button className="highlight" onClick={calculate} id="result">=</button>
            </div>

                    </div>
                    <div class='sun-icon-wrapper'>
                        <img src={logo} className="sun" alt="sun" />
                        <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                    </div>
                
                    <div class='toggle-button'></div>
                    <div class='moon-icon-wrapper'>
                        <img src={img} className="moon-icon" alt="moon-icon" />
                        <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                    </div>
                </div>
            </label>          
        </div>     
    );
}

export default App;
