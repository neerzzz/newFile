// import React, { useState } from 'react'
// import Navbar from './Navbar';

// const LightDark = () => {

//     var [color, setColor] = useState("light");
//     const change_color = () => {
//       if (color === "light") {
//         setColor((color = "dark"));
//         document.body.style.backgroundColor = "#121212";
//         document.querySelector(".navbar").style.backgroundColor = "#121212";
//         document.querySelector(".navbar").style.boxShadow = "none";
//         document.querySelector(".links_").style.backgroundColor = "#121212";
//         document.querySelector(".link_buttons").style.color = "#ffffff";
  
//         document.querySelector(".navbar").style.color = "#ffffff";
  
//         document.body.style.color = "#ffffff";
//       } else if (color === "dark") {
//         setColor((color = "light"));
//         document.body.style.backgroundColor = "whitesmoke";
//         document.querySelector(".navbar").style.backgroundColor = "whitesmoke";
//         // document.querySelector(".navbar").style.boxShadow = "none";
//         document.querySelector(".links_").style.backgroundColor = "whitesmoke";
//         document.querySelector(".link_buttons").style.color = "#121212";
//         document.body.style.color = "#121212";
//       }
//     };
  


//   return (
//     <div>
//     <Navbar color={color} change_color={change_color}  />
//     </div>
//   )
// }

// export default LightDark