import React, {Component, UseState}  from "react";

function Form(){
  return(
    <form>
      <button onClick={Restar} type="submit" className="btn btn-primary">-</button>
      <input 
        type="number" min=""
        className="form-control"
        id="contador"
        value="0"
      />
      <button onClick={Sumar} type="submit" className="btn btn-primary">+</button>
    </form>
  );
}

let contador = 0;

function Sumar(event){
  event.preventDefault()
  contador++
  console.log(contador);
  document.getElementById('contador').value = contador;
  return false;
}

function Restar(event){
  event.preventDefault()
  contador--
  console.log(contador);
  document.getElementById('contador').value = contador;
  return false;
}
export default Form;


