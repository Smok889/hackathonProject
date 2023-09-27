//react imports
import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaFireAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiFillPushpin } from "react-icons/ai";
function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  
  return (
    <>
    <div>
      {(typeof backendData.users === 'undefined')? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user,i) => (
          <p key={i}>{user} </p>
        ))
      )}
    </div>
      //layout
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
                <h2>Project 3</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
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

export default App;
