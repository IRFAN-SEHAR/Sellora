import React , {useState} from "react";
function Home(){
    return(
        <div className="main-content">
            <div className="searchBtn">
                <label htmlFor="search">search</label>
                <input  type="text" aria-required/>
                <input type="button" value="button" />
                </div>
                
        </div>
    )
};
export default Home;