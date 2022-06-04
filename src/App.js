import './App.css';
import Button from './components/button/';
import { useState, useEffect } from 'react';


function App() {

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [upDown, setUpDown] = useState(true) // true: up counting, false: down counting

  function toggleActivation() {
    setIsActive(!isActive);
  }

  function toggleUpDown() {
    setUpDown(!upDown);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (upDown)
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      else
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);

    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, upDown]);


  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <Button text="reset" onClick={reset}> </Button>
        <Button text={isActive ? 'Pause' : 'Start'} onClick={toggleActivation}> </Button>
        <Button text={upDown ? 'Down Count' : 'Up counting'} onClick={toggleUpDown}> </Button>
      </div>
    </div>
  );
}

export default App;
