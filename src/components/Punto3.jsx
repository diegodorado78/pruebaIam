import React from "react";
import { useState } from "react";

function Punto3() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  let numeros = [];

  let array = new Array(3);
  for (let i = 0; i < 3; i++) {
    array[i] = [];
  }
  array.map((x) => {
    for (let j = 0; j < 10; j++) {
      x.push("");
    }
  });
  const submitValue = (e) => {
    e.preventDefault();
    numeros = [first, second, third];
    if (first <= 10) {
      for (let index = 0; index < first; index++) {
        array[0][index] = "*";
      }
    } else {
      return console.log("ingrese un numero menor o igual a 10");
    }

    if (second <= 10) {
      for (let index = 0; index < second; index++) {
        array[1][index] = "*";
      }
    } else {
      return console.log("ingrese un numero menor o igual a 10");
    }

    if (third <= 10) {
      for (let index = 0; index < third; index++) {
        array[2][index] = "*";
      }
    } else {
      return console.log("ingrese un numero menor o igual a 10");
    }

    console.table(array);
  };

  return (
    <div>
      <h1>Punto 3</h1>
      <p>Ingrese tres numeros entre 1 y 10</p>
      <form action="">
        <input
          min="1"
          max="10"
          onChange={(e) => {
            setFirst(e.target.value);
          }}
          type="number"
          placeholder="primer numero"
        />
        <p>
          <input
            onChange={(e) => setSecond(e.target.value)}
            type="number"
            placeholder="segundo numero"
            min="1"
            max="10"
          />
        </p>
        <p>
          <input
            onChange={(e) => setThird(e.target.value)}
            type="number"
            placeholder="tercer numero"
            min="1"
            max="10"
          />
        </p>

        <button type="submit" onClick={submitValue}>
          send
        </button>
      </form>
    </div>
  );
}

export { Punto3 };
