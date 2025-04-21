import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{function NavBar() {
    const links = ["home", "about", "projects"];
  
    return (
      <nav>
        {links.map((link, index) => (
          <a href={`#${link}`} key={index}>
            {link}
          </a>
        ))}
      </nav>
    );
  }
   }</nav>;
}

export default NavBar;
