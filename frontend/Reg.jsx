import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaFireAlt } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { AiFillPushpin } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import App from "./App";


function Reg(){
    return(
        <>
<form action="/register" method = "POST">
    <div> 
        <label for = "name">
            Name
        </label>
        <input type = "text" id = "name" name = "name"
        required>
    </div>
    <div> 
        <label for = "email">
            Email
        </label>
        <input type = "email" id = "email" name = "email"
        required>
    </div>
    <div> 
        <label for = "password">
            Password
        </label>
        <input type = "password" id = "password" name = "password"
        required>
    </div>
    <button type = "submit">Submit</button>
</form>
<a href = "/login">Login</a>
</>
);
}

export default Reg;