//react imports
import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaFireAlt } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { AiFillPushpin } from "react-icons/ai";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Topview from "./topview";
//import red from "/server.js";

//const navigate = useNavigate();

// const navigateLogin = () => {
//   // 👇️ navigate to /
//   navigate("/login");
// };
function App() {
  //   const navigate = useNavigate();

  //   const navigateLogin = () => {
  //     // 👇️ navigate to /
  //     navigate("/login");
  //   };
  return (
    <>
      <h1>ProjeX</h1>
      <div class="topnav">
        <Link to={`/`} class="active" href="#home">
          Home
        </Link>
        <Link to={`top/`}>
          <FaFireAlt />
          &nbsp;Top viewed
        </Link>
        <Link to={`love/`}>
          <FcLike />
          &nbsp;Top liked
        </Link>
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
      &nbsp;
      <div className="pin">
        <section class="articles">
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="img1.jpg" alt="" />
              </figure>
              <div class="article-body">
                <h2>Smart Home Automation System</h2>
                <p>
                  Create a system that allows homeowners to control and monitor
                  various aspects of their home, such as lighting, temperature,
                  security, and appliances, through a centralized mobile app.
                </p>
                <a href="smart.pdf" class="read-more">
                  Read more{" "}
                  <span className="like">
                    <FcLikePlaceholder />
                  </span>
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="img2.jpg" alt="" />
              </figure>
              <div class="article-body">
                <h2>Virtual Reality Art Gallery</h2>
                <p>
                  Develop a virtual reality platform that enables artists to
                  showcase their work in immersive 3D galleries, providing
                  viewers with a unique and interactive art experience.
                </p>
                <a href="virtual.pdf" class="read-more">
                  Read more{" "}
                  <span className="like">
                    <FcLikePlaceholder />
                  </span>
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="img3.jpg" alt="" />
              </figure>
              <div class="article-body">
                <h2>Solar-Powered Mobile Charging Stations</h2>
                <p>
                  Develop portable, solar-powered charging stations that can be
                  deployed in public spaces, allowing people to charge their
                  devices sustainably while on the go.
                </p>
                <a href="solar.pdf" class="read-more">
                  Read more{" "}
                  <span className="like">
                    <FcLikePlaceholder />
                  </span>
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
      <buttton
        className="button"
        onClick={(event) => (window.location.href = "/login")}
      >
        Login
      </buttton>
      <br />
      <button
        className="button"
        onClick={(event) => (window.location.href = "/register")}
      >
        Register
      </button>
    </>
  );
}

export default App;
