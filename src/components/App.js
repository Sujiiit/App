import React from "react";
import "../styles.css";

import SignIn from './Login/signin';
import Signup from './Login/signup';
import Typeofuser from './setup/usertype';
import Worktype from './setup/worker';

export default function App() {
  return (
    <div className="App">
     <SignIn />
     <br/>
     <Signup />
     <br/>
     <Typeofuser />
     <br />
    <Worktype />
    </div>
  );
}
