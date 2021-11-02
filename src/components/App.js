import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import User from "../data/user"
import Links from "./Links"

// pass this data down as props to the child component(s) that need it!

// console.log(User);

function App(props) {

  // console.log(props)

  return (
    <div>
      <NavBar />
      <Home username={User.name} city={User.city} />
      <About bio={props.bio} />
      <Links 
      github={User.links.github} 
      linkedin={User.links.linkedin}  
      />
    </div>
  );
}

export default App;
