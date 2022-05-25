/////////////// Challenge 1 ///////////////
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <>
//     <h1>Shivam Singh Netflix Pick</h1>
//     <p>List of 5 Best Series</p>
//     <ol>
//       <li>Dark</li>
//       <li>Extra Curricular</li>
//       <li>My Holo love</li>
//       <li>My first -2 love</li>
//       <li>Mr Robot</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );

/////////////// Challenge 2 ////////////////

// import React from "react";
// import ReactDOM from "react-dom";
// const name = "shivam";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//     <h1>Hello, my name is {name}</h1>
//     <p>today Date is = {currDate}</p>
//     <p>Current Time is = {currTime}</p>
//   </>,
//   document.getElementById("root")
// );

//////////////// Challenge 3 //////////////////

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// const eveningTime = 19 >= new Date().getHours() >= 23 ? "Good Evening" : null;
// const afternoonTime =
//   12 >= new Date().getHours() >= 19 ? "Good Afternoon" : eveningTime;
// const morningTime =
//   1 >= new Date().getHours() >= 11 ? "Good Morning" : afternoonTime;
// const eveningStyle =
//   String(eveningTime) === "Good Evening"
//     ? {
//         color: "black",
//         textAlign: "center",
//       }
//     : null;
// const afternoonStyle =
//   String(afternoonTime) === "Good Afternoon"
//     ? {
//         color: "yellow",
//         textAlign: "center",
//       }
//     : eveningStyle;
// const morningStyle =
//   String(morningTime) === "Good Morning"
//     ? {
//         color: "blue",
//         textAlign: "center",
//       }
//     : afternoonStyle;
// ReactDOM.render(
//   <h1 style={morningStyle}>Hello Sir, {morningTime}</h1>,
//   document.getElementById("root")
// );
let currDate = new Date(2020, 5, 5, 16);
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};
if (currDate >= 1 && currDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "Black";
}
ReactDOM.render(
  <>
    <div>
      <h1>
        Hello Sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
