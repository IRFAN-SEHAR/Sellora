import React , {useState} from "react";
function Footer(){
    const date = new Date().getFullYear();
    return(
        <div className="footer">All Rights Reserved By Sellora @{date}</div>
    )
};
export default Footer;