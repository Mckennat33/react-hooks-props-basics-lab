import React from "react";
// import About from "./About"
// import User from "../data/user"

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.username} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
