import React , {useState} from "react";

function Header(){
const[menuOpen , setMenuOpen] = useState(false)

    return(
        
              <div className="header">
                <div className="nav-items">
                <logo>VELYN</logo>
                <ul  className={menuOpen ? "links-open" : "links" } >
              <li> <a href="#">home</a></li> 
              <li>  <a href="#">category</a>            </li>   
                   <li className="searchBtn">
                 <label htmlFor="search">
                  <span class="material-symbols-outlined">search</span>
                  </label>
                    <input  type="text" aria-required/>
                </li>
              <li className="login">     
<button className="loginBtn">login</button>
<button className="signupBtn">signup</button>
</li>
</ul>
<button id="menu" onClick={()=>setMenuOpen(!menuOpen)}>☰</button>
</div>
                </div>
    )
};
export default Header;