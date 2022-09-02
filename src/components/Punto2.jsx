import React from "react";
import "./styles.css";

function Punto2() {
  let array = new Array(5);
  for (let i = 1; i <=5; i++) {
    array[i] =  []
  }
  array.map((x,i) => {
    for (let j = 1; j <= 5; j++) {
      x.push(`${i},${j} `);
    }
  });
  console.table(array);
  return (
    <div>
      <h1> Punto2</h1>
      <div className="div__container2">
            {array.map((element, i) => {
              return (
                <div key={i}>
                  {element}
                </div>
              );
            })}
      </div>
    </div>
  );
}

export { Punto2 };
