import React, { useState, useEffect } from "react";
import "./App.css";
import mountainImage from "./img/mountain.png";
import arrowDownImage from "./img/arrow-down.svg";
import box1Image from "./img/box1.png";
import box2Image from "./img/box2.png";
import box3Image from "./img/box3.png";
import box4Image from "./img/box4.png";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [onDiscover, setOnDiscover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      setOnDiscover(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="fixed top-0 left-0 z-10 w-full p-4  text-white">
        <div className="container flex items-center justify-between">
          <a href="#" className="text-3xl font-bold">
            Nightsky
          </a>
          <ul className="space-x-8 flex items-center font-semibold">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Experiences</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a
                className="h-14 rounded-full border flex items-center border-current px-6"
                href="#"
              >
                Book a session
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div
        className="intro-section relative"
        style={{ backgroundPosition: `bottom -${scrollPosition / 2}px center` }}
      >
        <div
          style={{ transform: `translateY(${scrollPosition / 4}px)` }}
          className="transition ease-linear"
        >
          <div className="intro-section-text">
            <h1 className="text-5xl font-bold mb-4">Explore the Nightsky</h1>
            <p className="text-xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="absolute left-0 flex justify-center bottom-0 w-full">
          <img src={mountainImage} className="mountain -ml-32" alt="Mountain" />
        </div>
        <div className="absolute left-0 flex justify-center bottom-0 z-10 w-full pb-8">
          <a href="#bottomScreen">
            <button className="font-semibold flex flex-col justify-center items-center space-y-2 animate-bounce">
              <img src={arrowDownImage} alt="" />
              <span>Scroll down</span>
            </button>
          </a>
        </div>
      </div>

      <div
        id="bottomScreen"
        className="bottom-section h-screen text-white pt-56"
      >
        <div style={{ display: onDiscover ? "block" : "none" }}>
          <div className="bottom-section-text">
            <h1 className="text-5xl font-bold mb-4">
              Discover our experiences
            </h1>
            <p className="text-xl">
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="container">
            <div className="boxes flex items-center justify-between mt-24">
              <div className="location-box">
                <img src={box1Image} alt="Box 1" />
                <div className="text-xl font-semibold mt-5 mb-2">
                  Nightfire Camping
                </div>
                <p className="opacity-60">
                  Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div className="location-box">
                <img src={box2Image} alt="Box 2" />
                <div className="text-xl font-semibold mt-5 mb-2">
                  Nightfire Camping
                </div>
                <p className="opacity-60">
                  Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div className="location-box">
                <img src={box3Image} alt="Box 3" />
                <div className="text-xl font-semibold mt-5 mb-2">
                  Nightfire Camping
                </div>
                <p className="opacity-60">
                  Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div className="location-box">
                <img src={box4Image} alt="Box 4" />
                <div className="text-xl font-semibold mt-5 mb-2">
                  Nightfire Camping
                </div>
                <p className="opacity-60">
                  Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
