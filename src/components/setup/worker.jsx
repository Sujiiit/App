import React from "react";
// import ReactDOM from 'react-dom';

export default function workertype() {
  return (
    <div class="typepage">
      <img class='pic' src='https://img.freepik.com/free-vector/eye-camera-logo_53295-268.jpg?size=626&ext=jpg' />
      <h1 class="typehead">Please Select  </h1>
      <input list="browsers" name="browser" class="inputsign" placeholder='Category' />
      <datalist id="browsers">
      <option value="Mechanic" />
      <option value="Tailor" />
      <option value="Driver" />
      <option value="Plumber" />
      <option value="Garage" />
      <option value='Others' />
    </datalist>

     
    <span class='number-wrapper'>
    <input type="number" />
  </span>

      <button class="" id='typeuser'> Submit</button>
    </div>
  );
}
