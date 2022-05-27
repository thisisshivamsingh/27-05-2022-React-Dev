//////////////// Challenge 4 //////////////
// import React from "react";

// function App() {
//   // new Date(year, month, day, hours, minutes, seconds, milliseconds)
//   let currDate = new Date(2020, 5, 5, 16);
//   currDate = currDate.getHours();
//   let greeting = "";
//   const cssStyle = {};
//   if (currDate >= 1 && currDate < 12) {
//     greeting = "Good Morning";
//     cssStyle.color = "green";
//   } else if (currDate >= 12 && currDate < 19) {
//     greeting = "Good Afternoon";
//     cssStyle.color = "Orange";
//   } else {
//     greeting = "Good Night";
//     cssStyle.color = "Black";
//   }
//   return (
//     <>
//       <div>
//         <h1>
//           Hello Sir, <span style={cssStyle}>{greeting}</span>
//         </h1>
//       </div>
//     </>
//   );
// }

// export default App;

/////////////// Challenge 5 Create Simple Calculator App in React Js ////////////////
// import React from "react";
// import { add, sub, mult, div } from "./Calc.jsx";
// function App() {
//   return (
//     <>
//       <ul>
//         <li>{add(40, 4)}</li>
//         <li>{sub(40, 4)}</li>
//         <li>{mult(40, 4)}</li>
//         <li>{div(40, 3)}</li>
//       </ul>
//     </>
//   );
// }
// export default App;

/////////////// Challenge 6 Slot Machine Game in React Js ///////////////
import React from "react";
const SlotM = () => {
  let x = "😄";
  let y = "😄";
  let z = "🎅";
  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1> This is Matching. </h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1> This is Not Matching. </h1>
          <hr />
        </div>
      </>
    );
  }
};
const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold" }}> Slot machine game </span> 🎰
      </h1>
      <div className="slotmachine">
        <SlotM x="😄" y="😄" z="😄" />
        <SlotM />
        <SlotM />
      </div>
    </>
  );
};
export default App;
