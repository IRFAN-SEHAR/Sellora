import React , {useState} from "react";
function Header(){
    return(
        
              <div className="header">
                <h2>sellora</h2>
                <p>home</p>
                <p>category</p>
                <div className="searchBtn">
                <label htmlFor="search">search</label>
                <input  type="text" aria-required/>
                <input type="button" value="button" />
                </div>
                 <img src="src/assets/plp-solo4-cloudpink.jpg"  alt="https://placehold.co/150"  alt="profile pic" />
            <p>this is name</p>
            <input type="button" value="edit" onClick={()=>setIsEditing(true)} />
        </div>
        
    )
};
export default Header;