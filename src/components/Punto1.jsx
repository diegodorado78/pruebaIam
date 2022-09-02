import React from 'react';
import './styles.css';
function Punto1() {
 let array = [];
 for (let i = 1; i < 21; i++) {
  i%2===0?array=[...array,i]:''
 }
console.log(array);
  return (
    <div>
      <h1>Punto1</h1>

      <div className="div__container">
        {array.map((i) => {
          return <p key={i}>{i}</p>;
        })}
      </div>
    </div>
  );
}

export  {Punto1}