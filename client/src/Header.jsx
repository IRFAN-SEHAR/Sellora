import React , {useState} from "react";

function Header(){
const[menuOpen , setMenuOpen] = useState(false)

    return(
        
              <div className="header">
                <h1 className="logo" >VELYN</h1>
                <ul  className={menuOpen ? "links-open" : "links" } >
              <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M5 12l-2 0l9 -9l9 9l-2 0" />
	<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
	<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
</svg></a></li> 
              <li> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-category-plus">
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M4 4h6v6h-6v-6" />
	<path d="M14 4h6v6h-6v-6" />
	<path d="M4 14h6v6h-6v-6" />
	<path d="M14 17h6m-3 -3v6" />
</svg></a> </li>   
                   <li className="search-input">
                    <input  type="text" aria-required/>
                    <label htmlFor="search">searchc</label>
                </li>    
                {/* <li>  <span className="material-symbols-outlined">search</span></li>     */}
<li><button className="loginBtn">login</button></li>
<li><button className="signupBtn">signup</button></li>
<li><button className="cartBtn">cart</button></li>

</ul>
<button id="menu" onClick={()=>setMenuOpen(!menuOpen)}>☰</button>

                </div>
    )
};
export default Header;