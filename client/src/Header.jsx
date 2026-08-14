import React , {useState} from "react";
function Header(){
    return(
        
              <div className="header">
                <h2>sellora</h2>
                <p>home</p>
                <p>category</p>
                <label htmlFor="search">search</label>
                <input  type="text" aria-required/>
                <svg  className="search-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M21.2 18.9C22.2 17.5 22.8 15.8 22.8 14C22.8 9.1 18.9 5.2 14 5.2C9.1 5.2 5.2 9.1 5.2 14C5.2 18.9 9.1 22.8 14 22.8C15.8 22.8 17.5 22.2 18.9 21.2"
    stroke="currentColor"
    stroke-width="2.4"
    stroke-linecap="round"
  />
  <path
    d="M19 19L26.8 26.8"
    stroke="currentColor"
    stroke-width="2.4"
    stroke-linecap="round"
  />
  <circle cx="14" cy="14" r="1.6" fill="currentColor"/>
</svg>
                </div>
    
        
    )
};
export default Header;