import React , {useState} from "react";

function Header(){
const[menu , setMenu] = useState(false)

    return(
        
              <div className="header">
                <logo>VELYN</logo>
                <div className="menu-items"  className={menu } >
                <a href="#">home</a>
                <a href="#">category</a>            
                <div className="searchBtn">
                 <label htmlFor="search">
                  <span class="material-symbols-outlined">search</span>
                  </label>
                    <input  type="text" aria-required/>
                </div>
                <div className="login">
<button className="loginBtn">login</button>
<button className="signupBtn">signup</button>
</div>
</div>
<button id="menu"  >☰</button>
                </div>
    
        
    )
};
export default Header;