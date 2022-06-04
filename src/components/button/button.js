import React from 'react';
import style from './button.module.css'

function Button({ text, onClick }) {

  return <button className={style.button} onClick={onClick} > {text} </button>
}

export default Button;