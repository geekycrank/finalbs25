import React from "react";
import { Link } from "react-router-dom"; 
import "./Home.css";

import moon from "../assets/moon.png";
import castle from "../assets/castle.png";
import witch from "../assets/witch.png";
import typography from "../assets/BStypography.png";
import broom from "../assets/broom.png";
import bats from "../assets/bats.png";
import vector1 from "../assets/vector1.png"; // left cloud
import vector2 from "../assets/vector2.png"; // right cloud
import tree1 from "../assets/tree1.png"; // left tree
import tree2 from "../assets/tree2.png"; // right tree
import wand from "../assets/wand.png";
import bslogo from "../assets/bslogo.png";

import CountdownTimer from "./CountdownTimer";
import WebTeam from "./WebTeam";

function Home() {
  const targetDate = "2025-10-25T00:00:00";

  return (
    <div className="homepage">
      <header className="hero">
        {/* decorative images (absolute) */}
        <img src={moon} alt="moon" className="moon" />
        <img src={bats} alt="bats" className="bats" />
        {/* <img src={wand} alt="wand" className="wand" /> */}
        <img src={witch} alt="witch" className="witch" />
        <img src={castle} alt="castle" className="castle" />
        <img src={tree1} alt="left tree" className="tree tree-left" />
        <img src={tree2} alt="right tree" className="tree tree-right" />
        <img src={vector1} alt="left cloud" className="cloud cloud-left" />
        <img src={vector2} alt="right cloud" className="cloud cloud-right" />

        {/* main content flow (ensures navbar won't hide it) */}
        <div className="hero-content">
          <div className="hero-top-text">
            <br /> <br />
            <h2>The Literary and Debating Society</h2>
            <h3>Presents</h3>
          </div>

          {/* Title artwork centered and above the timer */}
          <img 
  src={typography} 
  alt="Brainstrain'25" 
  className="title" 
  style={{width: "500px", height: 'auto',backgroundColor: 'transparent', borderRadius: '10px', padding: '5px'}}
/>
          <img src={broom} alt="broom" className="broom-icon"/>
      

          {/* Timer block (flow layout — not absolutely positioned) */}
          <div className="hero-timer">
            <p className="starts-on">Starts on <span>October 25</span></p>
            <CountdownTimer targetDate={targetDate} />

            
              
            <Link to="/register" className="register-btn-link">
              <button className="register-btn">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* About card */}
      <section className="about-section">
        <div className="about-card">
          <img src={bslogo} alt="logo" className="about-logo" />
          <div className="about-text">
            <p>
              Brainstrain is an inter-collegiate literary fest hosted by the Literary and Debating Society of the Government College of Technology, Coimbatore. This fest features a multitude of literary events designed to bring out the hidden talents of participants while serving as a platform to connect like-minded individuals from diverse geographical backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Web team (carousel) */}
      <section className="webteam-section">
        <h2>Web Team</h2>
        <WebTeam />
      </section>

      {/* Contact */}
      <section className="contact-section" id="Contact">
        <div className="contact-inner">
          <div className="contact-art">
            <img
              src={require("../assets/telephone.png")}
              alt="telephone"
              className="contact-phone"
            />
          </div>
          <div className="contact-info">
            <div className="contact-names">
              <p>Bharani - 75400 09703</p>
              <p>Akash - 63856 98553</p>
            </div>
            <div className="contact-icons">
              <a href="tel:+917540009703" aria-label="Call Bharani" className="contact-icon"><img src={wand} alt="wandy" className="wand"/></a>
              <a href="https://wa.me/917540009703" target="_blank" rel="noreferrer" className="contact-icon" style={{ transform: "translateY(500px)" }}>.</a>
            </div>
            <h4 className="powered">Powered By The Literary and Debating Society</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
