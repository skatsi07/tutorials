import { useState } from 'react'
import './App.css'

function App() {
  // Theme state
  const [isPink, setIsPink] = useState(false);

  // set the input for the calculator
  const [input, setInput] = useState(" ")

  //get user click input and add to previous input
  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  //calc result
  const calculate = () => {
    try {
      // turns input string into maths
      const res = eval(input);
      //change input string to the result
      setInput(String(res));
    } catch (error) {
      setInput("Error");
    }
  };

  //clear screen
  const clear = () => {
    setInput("");
  };

  return (
    <div className={isPink ? "bg-pink" : "bg-blue"}>
      {/* Absolute positioned toggle button to avoid interfering with the center flex layout */}
      <button 
        onClick={() => setIsPink(!isPink)} 
        className="btn" 
        style={{ position: 'absolute', top: '20px', right: '20px' }}
      >
        Toggle Theme
      </button>

      <section id="center">
        <h1>React Calculator</h1>

        <div className="calculator">
          {/* shows the input */}
          <div className="display">
            {input || "0"}
          </div>

          {/* sets up all the event listners for particular buttons */}
          <div className="keypad">
            <button onClick={clear} className="clear">AC</button>
            <button onClick={() => handleClick("/")}>÷</button>

            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button onClick={() => handleClick("*")}>*</button>

            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button onClick={() => handleClick("-")}>-</button>

            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
            <button onClick={() => handleClick("+")}>+</button>

            <button onClick={() => handleClick("0")} className="zero">0</button>
            <button onClick={calculate} className="equals">=</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App
export function add(a: number, b: number): number { return a + b; }
export function subtract(a: number, b: number): number { return a - b; }
