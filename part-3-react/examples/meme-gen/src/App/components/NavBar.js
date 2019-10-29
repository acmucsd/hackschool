import React from 'react';

/** Component for navigational buttons */
const NavBar = (props) => {
  let links;
  if (props.page === ""){
    links =   
      <div id="links-section">
        <a className="link selected" id="acm-generator" href="/">Generator</a>
        <a className="link" id="acm-gallery" href="/gallery">Gallery</a>
      </div>;
  }
  else if (props.page === "gallery"){
    links =   
      <div id="links-section">
        <a className="link" id="acm-generator" href="/">Generator</a>
        <a className="link selected" id="acm-gallery" href="/gallery">Gallery</a>
      </div>;
    
  }
 
  return(
    <section id='nav-bar'>
      <h1 id="acm"> ACM UCSD Meme Gen </h1>
      {links}
    </section>
  ); 
}

export default NavBar;