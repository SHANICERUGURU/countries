import React from "react";
import NavBar from "./navbar";
import Error from "../assets/errorimg.avif"
const ErrorPage=()=>{
    return(
        <>
        <NavBar/>
        <div>
        <img src={Error}alt=""style={{width:'20rem'}} />
            <h1>404 Page Not Found</h1>
            <h2>Try Again,Failure is a step closer to success</h2>
        </div>
        </>
    )
}
export default ErrorPage