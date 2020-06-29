import React from "react";
// import ReactDOM from 'react-dom';

export default function signup() {
  return (
    <div class="sign">
       <img class='pic' src='https://img.freepik.com/free-vector/eye-camera-logo_53295-268.jpg?size=626&ext=jpg' />
      <h1 class="signname"> Sign Up</h1>
      <input type="text" placeholder="Full Name" class="inputsign" />
      <input type="text" placeholder="Email" class="inputsign" />
      <input type="text" placeholder="Username" class="inputsign" />
      <input type="text" placeholder="Password" class="inputsign" />
      <button class="submit">Sign Up</button>
      <a href="hello.com" class="signlink">
        Already have an account?Sign In
      </a>
    </div>
  );
}
