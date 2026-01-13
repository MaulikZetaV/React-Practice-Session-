import React from "react";
import logo from '../logo.svg';

//Greeting Function
function getGreeting() {
  return "Good Morning";
}

// Move condition Logic Outside JSX
function evaluation(score) {
  if (score >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}

export default function Day2() {
  // Rendering Variables
  const name = "Maulik Thakur";
  const role = "Trainee Developer";
  //Arthemtic Operation
  let price = 100;
  let quantity = 5;

  //Function handling
  const greet = getGreeting();

  //Ternary condition
  const isLoggedIn = true;

  //Conditonal logic variable
  let score = 65;
  const value1 = evaluation(score);
  return (
    <div>
      <h2>Day-2 Of React Learning</h2>
      <h3>Profile</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
        exercitationem soluta iste!
      </p>

      {/*// Self-closing tag*/}
      <img src={logo} width={200} height={200} alt="logo" />
      <label htmlFor="email_address">Email</label>
      <input type="email" id="email" name="email_address" />

      {/*Rendering Dynamic Variables */}
      <p>{name}</p>
      <p>{role}</p>

      <p>Total Price:{price * quantity}</p>

      <p>{greet}</p>

      {isLoggedIn ? "Welcome Back" : "Please Login"}

      <p>You had {value1} the exam</p>
    </div>
  );
}
