import React from "react";

// import "./Navbar.css";

function Navbar({ change_color, color }) {
  return (
    <nav className="navbar">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQy8bVhD9a2wtsrrJ3wJaRxZi1PCbeuQnUKw&usqp=CAU"
        alt=""
        className="--logo"
      />

      <a href="/">
        <h1>The Wudufff Corp</h1>
      </a>

      <div className="links_">
        {/* <button className="link_buttons" onClick={change_color}>
          {color}
        </button> */}

        <button className="link_buttons" onClick={change_color}>
          {color}
        </button>

        {/* <button onClick={change_color}>Dark/Light</button> */}
        <button className="link_buttons">Login</button>
        <button className="link_buttons">Upload</button>
      </div>
    </nav>
  );
}

export default Navbar;
