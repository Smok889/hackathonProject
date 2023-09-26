import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaFireAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiFillPushpin } from "react-icons/ai";
function App() {
  return (
    <>
      <h1>ProjeX</h1>
      <div class="topnav">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#about">
          <FaFireAlt />
          &nbsp;Top viewed
        </a>
        <a href="#contact">
          <FcLike />
          &nbsp;Top liked
        </a>
        <div class="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="pinn">
        <label>
          <AiFillPushpin />
          Pinned projects
        </label>
      </div>
    </>
  );
}

export default App;
