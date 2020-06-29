import React from "react";
// import ReactDOM from 'react-dom';

export default function signin() {
  return (
    <div class="sign">
       <img class='pic' src='https://img.freepik.com/free-vector/eye-camera-logo_53295-268.jpg?size=626&ext=jpg' />
      <h1 class="signname">Sign In</h1>
      <input type="text" placeholder="Username" class="inputsign" />
      <input type="text" placeholder="Password" class="inputsign" />
      <button class="submit">Sign In</button>
      <a href='hello.com' class='signlink'>Forget password?</a>
      <a href="hello.com" class="signlink">
        Don't have an account?Sign Up
      </a>
    </div>
  );
}
