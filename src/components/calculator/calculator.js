import React from 'react';
import Keypad from '../keypad';
import Screen from '../screen';
import s from './calculator.module.css';
import { useState } from 'react';


export default function Calculator() {

  const [data, setData] = useState("");
  const [screen, setScreen] = useState("");

  const calculate = () => {
    let result = eval(data);
    setData(result);
    setScreen(result);
  }

  return (
    <div className={s.calculator}>
      <Screen text={screen} />
      <Keypad setData={setData} setScreen={setScreen} calculate={calculate} />
    </div>
  );
}
