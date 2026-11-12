import React , {useState} from "react";
import useRevealOnScroll from "./useRevealOnScroll";
function Login(){
   const formRef = useRevealOnScroll();
    return(
     

        <div className="auth-form">
           <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
                <div>login</div>
                <div className="auth-input">
                <label htmlFor="email">email</label>
               <input type="email" name="email" id="email" />
               </div> 
               <div className="auth-input">
              <label htmlFor="password">password</label>
  <input type="password" id="password" name="password" /> 
                </div>
              <button type="submit">login</button>
               <div>login via</div>
               {/* <div className="other-login">
                 <div className="google"><svg viewBox="0 0 512 512"><path fill="rgb(5, 5, 5)" d="M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg></div>
  <div className="facebook"></div>
  <div className="tiktok"></div>
               </div> */}
               
<div className="other-login">
  <ul>
    <li className="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="">
      <svg
  viewBox="0 0 488 512"
  xmlns="http://www.w3.org/2000/svg"
  className="svg"
>
  <path
    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
  ></path>
</svg>
          </a>
      <div className="text">Google</div>
    </li>
    <li className="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="">
       <svg
          viewBox="0 0 320 512"
          xmlns="http://www.w3.org/2000/svg"
          className="svg"
        >
          <path
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          ></path></svg>
      </a>
      <div className="text">FaceBook</div>
    </li>
    <li className="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="">
     <svg
  viewBox="0 0 448 512"
  xmlns="http://www.w3.org/2000/svg"
  className="svg"
>
  <path
    d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"
  ></path>
</svg>
      </a>
      <div className="text">TikTok</div>
    </li>
  </ul>
</div>

              
            </form>
        </div>
    )
};
export default Login;