import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaFireAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiFillPushpin } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import App from "./App";
function Topview() {
  return (
    <>
      <h1>ProjeX</h1>
      <div class="topnav">
        <Link to={`/`}> Home</Link>
        <Link to={`/top`} className="active">
          <FaFireAlt />
          &nbsp;Top viewed
        </Link>
        <Link to={`/love`}>
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
                <a href="#" class="read-more">
                  Read more{" "}
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
                <a href="#" class="read-more">
                  Read more{" "}
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
                <h2>Environmental Sustainability Dashboard:</h2>
                <p>
                  Develop a web-based dashboard that compiles and visualizes
                  data on various environmental factors, helping organizations
                  and individuals make informed decisions to reduce their
                  ecological footprint.
                </p>
                <a href="#" class="read-more">
                  Read more{" "}
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
      &nbsp;
      <div className="pin">
        <section class="articles">
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="img1.jpg" alt="" />
              </figure>
              <div class="article-body">
                <h2>Educational Game for Children</h2>
                <p>
                  Create an engaging and educational mobile game aimed at
                  teaching young children essential skills like math, language,
                  and problem-solving in a fun and interactive way.
                </p>
                <a href="#" class="read-more">
                  Read more{" "}
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
                <h2>AI-Powered Personal Fitness Trainer</h2>
                <p>
                  Build a virtual personal fitness trainer that uses AI to
                  customize workout plans and provide real-time feedback based
                  on users' fitness levels and goals.
                </p>
                <a href="#" class="read-more">
                  Read more{" "}
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
                <a href="#" class="read-more">
                  Read more{" "}
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
    </>
  );
}

export default Topview;
