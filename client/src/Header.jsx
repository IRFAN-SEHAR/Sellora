import React , {useState} from "react";

function Header(){
const[menuOpen , setMenuOpen] = useState(false)

    return(
        
              <div className="header">
                <h1 className="logo" >VELYN</h1>
                <ul  className={menuOpen ? "links-open" : "links" } >
              <li><a href="#">home</a></li> 
              <li> <a href="#">category</a> </li>   
                   <li className="search-input">
                    <input  type="text" aria-required/>
                    <label htmlFor="search">search</label>
                </li>    
                {/* <li>  <span className="material-symbols-outlined">search</span></li>     */}
<li><button className="loginBtn">login</button></li>
<li><button className="signupBtn">signup</button></li>

</ul>
<button id="menu" onClick={()=>setMenuOpen(!menuOpen)}>☰</button>

                </div>
    )
};
export default Header;